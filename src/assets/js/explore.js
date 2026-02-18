// Explore page filtering
(function() {
    function validateContent(item) {
        if (!item || typeof item !== 'object') {
            return null;
        }
        return {
            title: item.title || 'Untitled',
            description: item.description || '',
            href: item.href || '#',
            tags: Array.isArray(item.tags) ? item.tags : [],
            type: item.type || 'article',
            status: item.status || 'seedling',
            connections: Array.isArray(item.connections) ? item.connections : [],
            lastUpdated: item.lastUpdated || null
        };
    }

    const rawData = window.exploreData || [];
    const contentData = rawData.map(validateContent).filter(Boolean);

    // Build lookup map for connections
    const titleToHref = new Map(contentData.map(item => [item.title, item.href]));

    // Extract all unique tags
    const allTags = [...new Set(contentData.flatMap(item => item.tags))].sort();

    // State
    let selectedTags = [];
    let selectedStatus = null;
    let selectedType = null;
    let showRandom = false;
    let randomItem = null;
    let searchQuery = '';

    // DOM elements
    const tagsContainer = document.getElementById('tags-container');
    const statusContainer = document.getElementById('status-container');
    const typeContainer = document.getElementById('type-container');
    const contentContainer = document.getElementById('content-container');
    const recentlyUpdatedSection = document.getElementById('recently-updated');
    const randomSection = document.getElementById('random-section');
    const randomBtn = document.getElementById('random-btn');
    const clearBtn = document.getElementById('clear-btn');
    const resultsCount = document.getElementById('results-count');
    const sectionTitle = document.getElementById('section-title');
    const searchInput = document.getElementById('explore-search');
    const filterToggle = document.getElementById('filter-toggle');
    const filterSection = document.getElementById('filter-section');

    function init() {
        const itemCount = document.getElementById('item-count');
        if (itemCount) itemCount.textContent = contentData.length;

        renderTags();
        renderStatusButtons();
        renderTypeButtons();
        renderRecentlyUpdated();
        renderContent();
        setupEventListeners();
        checkUrlParams();
    }

    function renderRecentlyUpdated() {
        const recentContent = document.getElementById('recent-content');
        if (!recentContent) return;

        const recentItems = contentData
            .filter(item => item.lastUpdated)
            .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
            .slice(0, 6);

        recentContent.innerHTML = recentItems.map(item => renderCard(item, true)).join('');
    }

    function toggleFilters(show) {
        if (!filterSection || !filterToggle) return;
        if (show === undefined) show = filterSection.hidden;
        filterSection.hidden = !show;
        filterToggle.classList.toggle('active', show);
    }

    function checkUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const tag = params.get('tag');
        const query = params.get('q');
        const type = params.get('type');

        if (tag && allTags.includes(tag)) {
            selectedTags = [tag];
            toggleFilters(true);
            renderTags();
        }

        if (query) {
            searchQuery = query;
            if (searchInput) searchInput.value = query;
        }

        if (type && ['article', 'interactive', 'project'].includes(type)) {
            selectedType = type;
            toggleFilters(true);
            renderTypeButtons();
        }

        if (tag || query || type) {
            renderContent();
        }
    }

    function renderTags() {
        if (!tagsContainer) return;
        tagsContainer.innerHTML = allTags.map(tag => `
            <button class="tag-btn${selectedTags.includes(tag) ? ' active' : ''}" data-tag="${tag}">
                ${tag}
            </button>
        `).join('');
    }

    function renderStatusButtons() {
        if (!statusContainer) return;
        ['seedling', 'growing', 'evergreen'].forEach(status => {
            const btn = statusContainer.querySelector(`[data-status="${status}"]`);
            if (btn) {
                btn.classList.toggle('active', selectedStatus === status);
            }
        });
    }

    function renderTypeButtons() {
        if (!typeContainer) return;
        ['article', 'interactive', 'project'].forEach(type => {
            const btn = typeContainer.querySelector(`[data-type="${type}"]`);
            if (btn) {
                btn.classList.toggle('active', selectedType === type);
            }
        });
    }

    // Filter functions
    function filterBySearch(items, query) {
        if (!query) return items;
        const q = query.toLowerCase();
        return items.filter(item =>
            item.title.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.tags.some(tag => tag.toLowerCase().includes(q))
        );
    }

    function filterByTags(items, tags) {
        if (!tags || tags.length === 0) return items;
        return items.filter(item =>
            tags.some(tag => item.tags.includes(tag))
        );
    }

    function filterByStatus(items, status) {
        if (!status) return items;
        return items.filter(item => item.status === status);
    }

    function filterByType(items, type) {
        if (!type) return items;
        return items.filter(item => item.type === type);
    }

    function getFilteredContent() {
        let filtered = contentData;
        filtered = filterBySearch(filtered, searchQuery);
        filtered = filterByTags(filtered, selectedTags);
        filtered = filterByStatus(filtered, selectedStatus);
        filtered = filterByType(filtered, selectedType);
        return filtered;
    }

    function renderContent() {
        const filtered = getFilteredContent();
        const hasFilters = selectedTags.length > 0 || selectedStatus !== null || selectedType !== null || searchQuery !== '';

        if (clearBtn) clearBtn.style.display = hasFilters ? 'inline-block' : 'none';
        if (resultsCount) {
            resultsCount.style.display = hasFilters ? 'inline' : 'none';
            resultsCount.textContent = `${filtered.length} results`;
        }
        if (sectionTitle) {
            sectionTitle.textContent = hasFilters ? 'Filtered results' : 'Everything';
        }
        if (recentlyUpdatedSection) {
            recentlyUpdatedSection.style.display = (hasFilters || showRandom) ? 'none' : 'block';
        }
        if (randomSection) {
            randomSection.style.display = showRandom && randomItem ? 'block' : 'none';
            if (showRandom && randomItem) {
                randomSection.querySelector('.random-content').innerHTML = renderCard(randomItem);
            }
        }

        if (contentContainer) {
            contentContainer.innerHTML = filtered.map(item => renderCard(item)).join('');
        }
    }

    function renderCard(item, compact) {
        var isExternal = item.href.startsWith('http');
        var typeClass = item.type !== 'article' ? ' type-' + item.type : '';

        var typeIndicator = '';
        if (item.type === 'interactive') {
            typeIndicator = '<span class="type-indicator">interactive</span>';
        } else if (item.type === 'project') {
            typeIndicator = '<span class="type-indicator">project</span>';
        }

        var descriptionHtml = compact ? '' :
            '<p class="card-description">' + item.description + '</p>';

        return '<div class="content-card' + typeClass + (compact ? ' compact' : '') + '">' +
            '<div class="card-header">' +
                '<a href="' + item.href + '"' +
                    (isExternal ? ' target="_blank" rel="noopener noreferrer"' : '') +
                    ' class="card-title">' +
                    item.title + (isExternal ? ' &#8599;' : '') +
                '</a>' +
                '<span class="status-badge status-' + item.status + '">' + item.status + '</span>' +
            '</div>' +
            descriptionHtml +
            (typeIndicator && !compact ? '<div class="card-meta">' + typeIndicator + '</div>' : '') +
        '</div>';
    }

    function setupEventListeners() {
        // Tag clicks (delegated)
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('tag-btn')) {
                e.preventDefault();
                var tag = e.target.dataset.tag;
                if (selectedTags.includes(tag)) {
                    selectedTags = selectedTags.filter(function(t) { return t !== tag; });
                } else {
                    selectedTags.push(tag);
                }
                showRandom = false;
                randomItem = null;
                renderTags();
                renderContent();
            }
        });

        // Status clicks
        if (statusContainer) {
            statusContainer.addEventListener('click', function(e) {
                if (e.target.dataset.status) {
                    var status = e.target.dataset.status;
                    selectedStatus = selectedStatus === status ? null : status;
                    showRandom = false;
                    randomItem = null;
                    renderStatusButtons();
                    renderContent();
                }
            });
        }

        // Type clicks
        if (typeContainer) {
            typeContainer.addEventListener('click', function(e) {
                if (e.target.dataset.type) {
                    var type = e.target.dataset.type;
                    selectedType = selectedType === type ? null : type;
                    showRandom = false;
                    randomItem = null;
                    renderTypeButtons();
                    renderContent();
                }
            });
        }

        // Random button
        if (randomBtn) {
            randomBtn.addEventListener('click', function() {
                var randomIndex = Math.floor(Math.random() * contentData.length);
                randomItem = contentData[randomIndex];
                showRandom = true;
                renderContent();
            });
        }

        // Clear button
        if (clearBtn) {
            clearBtn.addEventListener('click', function() {
                selectedTags = [];
                selectedStatus = null;
                selectedType = null;
                showRandom = false;
                randomItem = null;
                searchQuery = '';
                if (searchInput) searchInput.value = '';
                renderTags();
                renderStatusButtons();
                renderTypeButtons();
                renderContent();
            });
        }

        // Search input
        if (searchInput) {
            searchInput.addEventListener('input', function(e) {
                searchQuery = e.target.value;
                showRandom = false;
                randomItem = null;
                renderContent();
            });
        }

        // Filter toggle
        if (filterToggle) {
            filterToggle.addEventListener('click', function() {
                toggleFilters();
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
