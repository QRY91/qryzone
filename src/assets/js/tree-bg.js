// Tree Background - Decorative ambient tree visualization
(function() {
    'use strict';

    const PADDING = 40;

    // Default options
    const defaultOptions = {
        opacity: 0.08,
        parallax: 0.5,
        color: '#f0dfaf',
        gridOpacity: 0.05
    };

    // Botanical marker drawing functions
    const markers = {
        // Deciduous: sun-burst pattern (circle with radiating lines)
        deciduous: function(ctx, x, y, size, color, opacity) {
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
            ctx.lineWidth = 1;

            // Center circle
            ctx.beginPath();
            ctx.arc(x, y, size * 0.3, 0, Math.PI * 2);
            ctx.fill();

            // 8 radiating lines
            for (let i = 0; i < 8; i++) {
                const angle = (i * Math.PI) / 4;
                const innerR = size * 0.4;
                const outerR = size;
                ctx.beginPath();
                ctx.moveTo(x + Math.cos(angle) * innerR, y + Math.sin(angle) * innerR);
                ctx.lineTo(x + Math.cos(angle) * outerR, y + Math.sin(angle) * outerR);
                ctx.stroke();
            }

            ctx.restore();
        },

        // Conifer: stylized pine triangle with horizontal lines
        conifer: function(ctx, x, y, size, color, opacity) {
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = color;
            ctx.fillStyle = 'none';
            ctx.lineWidth = 1;

            const h = size * 1.6;
            const w = size * 1.2;
            const trunkH = size * 0.3;

            // Triangle outline
            ctx.beginPath();
            ctx.moveTo(x, y - h / 2);
            ctx.lineTo(x - w / 2, y + h / 2 - trunkH);
            ctx.lineTo(x + w / 2, y + h / 2 - trunkH);
            ctx.closePath();
            ctx.stroke();

            // Internal horizontal lines (branches)
            const lines = 3;
            for (let i = 1; i <= lines; i++) {
                const ly = y - h / 2 + (i * (h - trunkH)) / (lines + 1);
                const progress = i / (lines + 1);
                const lw = w * progress * 0.8;
                ctx.beginPath();
                ctx.moveTo(x - lw / 2, ly);
                ctx.lineTo(x + lw / 2, ly);
                ctx.stroke();
            }

            // Trunk
            ctx.beginPath();
            ctx.moveTo(x - size * 0.1, y + h / 2 - trunkH);
            ctx.lineTo(x - size * 0.1, y + h / 2);
            ctx.lineTo(x + size * 0.1, y + h / 2);
            ctx.lineTo(x + size * 0.1, y + h / 2 - trunkH);
            ctx.stroke();

            ctx.restore();
        },

        // Fruit: concentric circles (target symbol)
        fruit: function(ctx, x, y, size, color, opacity) {
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
            ctx.lineWidth = 1;

            // Outer circle
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.stroke();

            // Inner circle (filled)
            ctx.beginPath();
            ctx.arc(x, y, size * 0.4, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }
    };

    // Main render function
    function renderBackground(canvasId, treeData, userOptions) {
        const options = { ...defaultOptions, ...userOptions };
        const canvas = document.getElementById(canvasId);
        if (!canvas) {
            console.warn('Tree background canvas not found:', canvasId);
            return;
        }

        const ctx = canvas.getContext('2d');
        const wrapper = canvas.parentElement;

        // Size canvas to viewport width x 3 (portrait)
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const canvasWidth = vw;
        const canvasHeight = vh * 3;

        // Set canvas size (use device pixel ratio for crisp rendering)
        const dpr = window.devicePixelRatio || 1;
        canvas.width = canvasWidth * dpr;
        canvas.height = canvasHeight * dpr;
        canvas.style.width = canvasWidth + 'px';
        canvas.style.height = canvasHeight + 'px';
        ctx.scale(dpr, dpr);

        // Calculate drawing area
        const drawWidth = canvasWidth - PADDING * 2;
        const drawHeight = canvasHeight - PADDING * 2;

        // Coordinate conversion (yard to canvas)
        function yardToCanvas(yardX, yardY) {
            // yardX = meters north (0 to depth), yardY = meters east (0 to width)
            // Canvas: x = east, y = south-to-north inverted
            const cx = PADDING + (yardY / treeData.yard.width) * drawWidth;
            const cy = PADDING + ((treeData.yard.depth - yardX) / treeData.yard.depth) * drawHeight;
            return { x: cx, y: cy };
        }

        // Clear canvas
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // Draw subtle grid
        drawGrid(ctx, canvasWidth, canvasHeight, treeData, options, yardToCanvas);

        // Draw tree markers
        drawTrees(ctx, treeData, options, yardToCanvas);

        // Set up parallax if enabled
        if (options.parallax && wrapper) {
            setupParallax(wrapper, options.parallax);
        }

        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                renderBackground(canvasId, treeData, userOptions);
            }, 150);
        });
    }

    // Draw grid lines
    function drawGrid(ctx, width, height, treeData, options, yardToCanvas) {
        ctx.strokeStyle = options.color;
        ctx.globalAlpha = options.gridOpacity;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);

        // Horizontal lines (every 5m north)
        for (let x = 0; x <= treeData.yard.depth; x += 5) {
            const pos = yardToCanvas(x, 0);
            ctx.beginPath();
            ctx.moveTo(PADDING, pos.y);
            ctx.lineTo(width - PADDING, pos.y);
            ctx.stroke();
        }

        // Vertical lines (every 5m east)
        for (let y = 0; y <= treeData.yard.width; y += 5) {
            const pos = yardToCanvas(0, y);
            ctx.beginPath();
            ctx.moveTo(pos.x, PADDING);
            ctx.lineTo(pos.x, height - PADDING);
            ctx.stroke();
        }

        ctx.setLineDash([]);
        ctx.globalAlpha = 1;
    }

    // Draw tree markers
    function drawTrees(ctx, treeData, options, yardToCanvas) {
        treeData.trees.forEach(function(tree) {
            const pos = yardToCanvas(tree.x, tree.y);

            // Size based on age (older = larger)
            const size = Math.min(8 + tree.age / 2, 20);

            // Opacity varies by age (older = more opaque, within the overall opacity)
            const ageOpacity = 0.5 + (tree.age / 40) * 0.5;
            const finalOpacity = options.opacity * ageOpacity;

            // Get marker function based on category
            const markerFn = markers[tree.category] || markers.deciduous;
            markerFn(ctx, pos.x, pos.y, size, options.color, finalOpacity);
        });
    }

    // Set up parallax scrolling
    function setupParallax(wrapper, factor) {
        let ticking = false;
        let lastScrollY = window.scrollY;

        function updateParallax() {
            const scrollY = window.scrollY;
            wrapper.style.transform = 'translateY(' + (-scrollY * factor) + 'px)';
            ticking = false;
        }

        window.addEventListener('scroll', function() {
            lastScrollY = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateParallax();
                });
                ticking = true;
            }
        }, { passive: true });

        // Initial position
        updateParallax();
    }

    // Expose to global scope
    window.TreeBackground = {
        render: renderBackground
    };
})();
