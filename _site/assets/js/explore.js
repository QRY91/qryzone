// Explore page filtering
(function() {
    // Data will be embedded in the page
    const contentData = window.exploreData || [];

    // Build lookup map for connections
    const titleToHref = new Map(contentData.map(item => [item.title, item.href]));

    // Extract all unique tags
    const allTags = [...new Set(contentData.flatMap(item => item.tags))].sort();

    // State
    let selectedTags = [];
    let selectedStatus = null;
    let showRandom = false;
    let randomItem = null;

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

    // Initialize
    function init() {
        renderTags();
        renderStatusButtons();
        renderContent();
        setupEventListeners();
        checkUrlParams();
    }

    function checkUrlParams() {
        const params = new URLSearchParams(window.location.search);
        const tag = params.get('tag');
        if (tag && allTags.includes(tag)) {
            selectedTags = [tag];
            renderTags();
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

    function getFilteredContent() {
        let filtered = contentData;

        if (selectedTags.length > 0) {
            filtered = filtered.filter(item =>
                selectedTags.some(tag => item.tags.includes(tag))
            );
        }

        if (selectedStatus) {
            filtered = filtered.filter(item => item.status === selectedStatus);
        }

        return filtered;
    }

    function renderContent() {
        const filtered = getFilteredContent();
        const hasFilters = selectedTags.length > 0 || selectedStatus !== null;

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
        const statusColors = {
            seedling: { bg: '#2d3a2d', text: '#81c784', border: '#4a5f4a' },
            growing: { bg: '#3a3a2d', text: '#f0dfaf', border: '#5f5f4a' },
            evergreen: { bg: '#2d3a3a', text: '#7fc7c7', border: '#4a5f5f' }
        };
        const color = statusColors[item.status];

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
                    <span class="status-badge" style="background:${color.bg};color:${color.text};border-color:${color.border}">
                        ${item.status}
                    </span>
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
                renderTags();
                renderStatusButtons();
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
