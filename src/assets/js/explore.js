// Explore page filtering
(function() {
    // Validate and normalize content items with defensive defaults
    function validateContent(item) {
        if (!item || typeof item !== 'object') {
            return null;
        }
        return {
            title: item.title || 'Untitled',
            description: item.description || '',
            href: item.href || '#',
            tags: Array.isArray(item.tags) ? item.tags : [],
            status: item.status || 'seedling',
            connections: Array.isArray(item.connections) ? item.connections : [],
            lastUpdated: item.lastUpdated || null
        };
    }

    // Data will be embedded in the page, validated before use
    const rawData = window.exploreData || [];
    const contentData = rawData.map(validateContent).filter(Boolean);

    // Build lookup map for connections
    const titleToHref = new Map(contentData.map(item => [item.title, item.href]));

    // Extract all unique tags
    const allTags = [...new Set(contentData.flatMap(item => item.tags))].sort();

    // State
    let selectedTags = [];
    let selectedStatus = null;
    let showRandom = false;
    let randomItem = null;
    let searchQuery = '';

    // DOM elements
    const tagsContainer = document.getElementById('tags-container');
    const statusContainer = document.getElementById('status-container');
    const contentContainer = document.getElementById('content-container');
    const recentlyUpdatedSection = document.getElementById('recently-updated');
    const randomSection = document.getElementById('random-section');
    const randomBtn = document.getElementById('random-btn');
    const clearBtn = document.getElementById('clear-btn');
    const resultsCount = document.getElementById('results-count');
    const sectionTitle = document.getElementById('section-title');
    const searchInput = document.getElementById('explore-search');

    // Initialize
    function init() {
        // Set item count dynamically
        const itemCount = document.getElementById('item-count');
        if (itemCount) itemCount.textContent = contentData.length;

        renderTags();
        renderStatusButtons();
        renderRecentlyUpdated();
        renderContent();
        setupEventListeners();
        checkUrlParams();
    }

    function renderRecentlyUpdated() {
        const recentContent = document.getElementById('recent-content');
        if (!recentContent) return;

        // Get items with lastUpdated, sort by date descending, take top 5
        const recentItems = contentData
            .filter(item => item.lastUpdated)
            .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
            .slice(0, 5);

        recentContent.innerHTML = recentItems.map(item => renderCard(item, true)).join('');
    }

    function checkUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const tag = params.get('tag');
        const query = params.get('q');

        if (tag && allTags.includes(tag)) {
            selectedTags = [tag];
            renderTags();
        }

        if (query) {
            searchQuery = query;
            if (searchInput) searchInput.value = query;
        }

        if (tag || query) {
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

    // Pure filter functions (single responsibility)
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

    // Compose filters
    function getFilteredContent() {
        let filtered = contentData;
        filtered = filterBySearch(filtered, searchQuery);
        filtered = filterByTags(filtered, selectedTags);
        filtered = filterByStatus(filtered, selectedStatus);
        return filtered;
    }

    function renderContent() {
        const filtered = getFilteredContent();
        const hasFilters = selectedTags.length > 0 || selectedStatus !== null || searchQuery !== '';

        // Update UI elements
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

        // Render content list
        if (contentContainer) {
            contentContainer.innerHTML = filtered.map(item => renderCard(item)).join('');
        }
    }

    function renderCard(item, compact = false) {
        const isExternal = item.href.startsWith('http');

        let connectionsHtml = '';
        if (!compact && item.connections && item.connections.length > 0) {
            const links = item.connections.map(conn => {
                const href = titleToHref.get(conn);
                if (href) {
                    const ext = href.startsWith('http');
                    return ext
                        ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${conn}</a>`
                        : `<a href="${href}">${conn}</a>`;
                }
                return conn;
            }).join(', ');
            connectionsHtml = `<div class="connections">Related: ${links}</div>`;
        }

        const tagsHtml = compact ? '' : `
            <div class="card-tags">
                ${item.tags.map(tag => `<button class="tag-btn small" data-tag="${tag}">${tag}</button>`).join('')}
            </div>
        `;

        return `
            <div class="content-card${compact ? ' compact' : ''}">
                <div class="card-header">
                    <a href="${item.href}"${isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''} class="card-title">
                        ${item.title}${isExternal ? ' ↗' : ''}
                    </a>
                    <span class="status-badge status-${item.status}">${item.status}</span>
                </div>
                ${compact ? '' : `<p class="card-description">${item.description}</p>`}
                ${tagsHtml}
                ${connectionsHtml}
            </div>
        `;
    }

    function setupEventListeners() {
        // Tag clicks (delegated)
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('tag-btn')) {
                e.preventDefault();
                const tag = e.target.dataset.tag;
                if (selectedTags.includes(tag)) {
                    selectedTags = selectedTags.filter(t => t !== tag);
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
                    const status = e.target.dataset.status;
                    selectedStatus = selectedStatus === status ? null : status;
                    showRandom = false;
                    randomItem = null;
                    renderStatusButtons();
                    renderContent();
                }
            });
        }

        // Random button
        if (randomBtn) {
            randomBtn.addEventListener('click', function() {
                const randomIndex = Math.floor(Math.random() * contentData.length);
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
                showRandom = false;
                randomItem = null;
                searchQuery = '';
                if (searchInput) searchInput.value = '';
                renderTags();
                renderStatusButtons();
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
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
