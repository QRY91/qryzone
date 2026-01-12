// Mobile menu functionality
(function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const overlay = document.getElementById('overlay');
    const searchContainer = document.getElementById('search-container');
    const searchToggle = document.getElementById('search-toggle');
    const searchInput = document.getElementById('search-input');

    if (!hamburger || !navLinks || !overlay) return;

    function openMenu() {
        hamburger.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        navLinks.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function toggleMenu() {
        if (navLinks.classList.contains('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('open')) {
            closeMenu();
        }
    });

    // Close menu on link click (for mobile)
    navLinks.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', closeMenu);
    });

    // Search functionality
    if (searchContainer && searchToggle && searchInput) {
        function expandSearch() {
            searchContainer.classList.add('expanded');
            searchInput.focus();
        }

        function collapseSearch() {
            if (!searchInput.value.trim()) {
                searchContainer.classList.remove('expanded');
            }
        }

        searchToggle.addEventListener('click', function(e) {
            e.preventDefault();
            expandSearch();
        });

        searchInput.addEventListener('blur', function() {
            setTimeout(collapseSearch, 150);
        });

        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                searchInput.value = '';
                collapseSearch();
                searchInput.blur();
            }
        });
    }
})();
