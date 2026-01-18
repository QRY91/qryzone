// Tree Tags - Yard tree visualization
(function() {
    'use strict';

    // Canvas dimensions (portrait: ~300px wide × 900px tall for 1:3 aspect ratio)
    const CANVAS_WIDTH = 300;
    const CANVAS_HEIGHT = 900;
    const PADDING = 20;

    // State
    let showGrid = true;
    let showLabels = false;
    let selectedTree = null;

    // DOM elements
    const canvas = document.getElementById('yardCanvas');
    const ctx = canvas.getContext('2d');
    const treeCountEl = document.getElementById('treeCount');
    const selectedTreeEl = document.getElementById('selectedTree');
    const detailPanel = document.getElementById('detailPanel');
    const detailTitle = document.getElementById('detailTitle');
    const detailContent = document.getElementById('detailContent');
    const detailClose = document.getElementById('detailClose');
    const toggleGridBtn = document.getElementById('toggleGrid');
    const toggleLabelsBtn = document.getElementById('toggleLabels');
    const helpBtn = document.getElementById('helpBtn');
    const helpModal = document.getElementById('helpModal');
    const helpClose = document.getElementById('helpClose');

    // Colors by category
    const categoryColors = {
        deciduous: '#7cb342',
        conifer: '#388e3c',
        fruit: '#f9a825',
        default: '#8c8c8c'
    };

    // Initialize canvas
    function init() {
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;

        // Update tree count
        treeCountEl.textContent = treeData.trees.length;

        // Set up event listeners
        canvas.addEventListener('click', handleCanvasClick);
        canvas.addEventListener('mousemove', handleCanvasMouseMove);
        toggleGridBtn.addEventListener('click', toggleGrid);
        toggleLabelsBtn.addEventListener('click', toggleLabels);
        detailClose.addEventListener('click', closeDetail);
        helpBtn.addEventListener('click', () => helpModal.classList.add('show'));
        helpClose.addEventListener('click', () => helpModal.classList.remove('show'));
        helpModal.addEventListener('click', (e) => {
            if (e.target === helpModal) helpModal.classList.remove('show');
        });

        // Initial button states
        if (showGrid) toggleGridBtn.classList.add('active');
        if (showLabels) toggleLabelsBtn.classList.add('active');

        // Initial render
        render();
    }

    // Convert yard coordinates (meters) to canvas coordinates
    // x = meters north (0-60), y = meters east (0-20)
    // Canvas: top = north (x=60), bottom = south (x=0)
    function yardToCanvas(x, y) {
        const drawWidth = CANVAS_WIDTH - PADDING * 2;
        const drawHeight = CANVAS_HEIGHT - PADDING * 2;

        // y (east) maps to canvas x
        // x (north) maps to canvas y (inverted: north at top)
        const canvasX = PADDING + (y / treeData.yard.width) * drawWidth;
        const canvasY = PADDING + ((treeData.yard.depth - x) / treeData.yard.depth) * drawHeight;

        return { x: canvasX, y: canvasY };
    }

    // Convert canvas coordinates to yard coordinates
    function canvasToYard(canvasX, canvasY) {
        const drawWidth = CANVAS_WIDTH - PADDING * 2;
        const drawHeight = CANVAS_HEIGHT - PADDING * 2;

        const y = ((canvasX - PADDING) / drawWidth) * treeData.yard.width;
        const x = treeData.yard.depth - ((canvasY - PADDING) / drawHeight) * treeData.yard.depth;

        return { x, y };
    }

    // Draw the yard
    function render() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        drawZones();
        if (showGrid) drawGrid();
        drawTrees();
    }

    // Draw zone backgrounds
    function drawZones() {
        const drawWidth = CANVAS_WIDTH - PADDING * 2;
        const drawHeight = CANVAS_HEIGHT - PADDING * 2;

        treeData.yard.zones.forEach(zone => {
            const startPos = yardToCanvas(zone.end, 0);
            const endPos = yardToCanvas(zone.start, treeData.yard.width);

            ctx.fillStyle = zone.color;
            ctx.fillRect(
                PADDING,
                startPos.y,
                drawWidth,
                endPos.y - startPos.y
            );
        });

        // Draw border
        ctx.strokeStyle = '#4a4a4a';
        ctx.lineWidth = 1;
        ctx.strokeRect(PADDING, PADDING, drawWidth, drawHeight);
    }

    // Draw 5m grid lines
    function drawGrid() {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 4]);

        // Horizontal lines (every 5m north)
        for (let x = 0; x <= treeData.yard.depth; x += 5) {
            const pos = yardToCanvas(x, 0);
            ctx.beginPath();
            ctx.moveTo(PADDING, pos.y);
            ctx.lineTo(CANVAS_WIDTH - PADDING, pos.y);
            ctx.stroke();

            // Label every 10m
            if (x % 10 === 0) {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
                ctx.font = '9px Atkinson Hyperlegible Mono, monospace';
                ctx.textAlign = 'right';
                ctx.fillText(x + 'm', PADDING - 4, pos.y + 3);
            }
        }

        // Vertical lines (every 5m east)
        for (let y = 0; y <= treeData.yard.width; y += 5) {
            const pos = yardToCanvas(0, y);
            ctx.beginPath();
            ctx.moveTo(pos.x, PADDING);
            ctx.lineTo(pos.x, CANVAS_HEIGHT - PADDING);
            ctx.stroke();

            // Label every 10m
            if (y % 10 === 0) {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
                ctx.font = '9px Atkinson Hyperlegible Mono, monospace';
                ctx.textAlign = 'center';
                ctx.fillText(y + 'm', pos.x, CANVAS_HEIGHT - PADDING + 12);
            }
        }

        ctx.setLineDash([]);
    }

    // Draw tree markers
    function drawTrees() {
        treeData.trees.forEach(tree => {
            const pos = yardToCanvas(tree.x, tree.y);
            const color = categoryColors[tree.category] || categoryColors.default;
            const radius = Math.min(4 + tree.age / 3, 12);
            const isSelected = selectedTree && selectedTree.id === tree.id;

            // Glow for selected tree
            if (isSelected) {
                ctx.beginPath();
                ctx.arc(pos.x, pos.y, radius + 6, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(240, 223, 175, 0.3)';
                ctx.fill();
            }

            // Tree marker
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();

            // Border
            ctx.strokeStyle = isSelected ? '#f0dfaf' : 'rgba(255, 255, 255, 0.4)';
            ctx.lineWidth = isSelected ? 2 : 1;
            ctx.stroke();

            // Label
            if (showLabels) {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                ctx.font = '9px Atkinson Hyperlegible Mono, monospace';
                ctx.textAlign = 'center';
                ctx.fillText(tree.species.split(' ').pop(), pos.x, pos.y - radius - 4);
            }
        });
    }

    // Find tree at canvas position
    function findTreeAt(canvasX, canvasY) {
        for (const tree of treeData.trees) {
            const pos = yardToCanvas(tree.x, tree.y);
            const radius = Math.min(4 + tree.age / 3, 12);
            const distance = Math.sqrt(
                Math.pow(canvasX - pos.x, 2) + Math.pow(canvasY - pos.y, 2)
            );
            if (distance <= radius + 4) {
                return tree;
            }
        }
        return null;
    }

    // Handle canvas click
    function handleCanvasClick(e) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const canvasX = (e.clientX - rect.left) * scaleX;
        const canvasY = (e.clientY - rect.top) * scaleY;

        const tree = findTreeAt(canvasX, canvasY);
        if (tree) {
            selectTree(tree);
        } else {
            deselectTree();
        }
    }

    // Handle mouse move (cursor change)
    function handleCanvasMouseMove(e) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const canvasX = (e.clientX - rect.left) * scaleX;
        const canvasY = (e.clientY - rect.top) * scaleY;

        const tree = findTreeAt(canvasX, canvasY);
        canvas.style.cursor = tree ? 'pointer' : 'crosshair';
    }

    // Select a tree
    function selectTree(tree) {
        selectedTree = tree;
        selectedTreeEl.textContent = tree.id;
        detailPanel.classList.remove('hidden');

        detailTitle.textContent = tree.species;
        detailContent.innerHTML = `
            <div class="detail-row">
                <span class="detail-label">id</span>
                <span class="detail-value">${tree.id}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">category</span>
                <span class="detail-value">${tree.category}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">age</span>
                <span class="detail-value">${tree.age} years</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">position</span>
                <span class="detail-value">${tree.x}m N, ${tree.y}m E</span>
            </div>
            ${tree.notes ? `<div class="detail-notes">${tree.notes}</div>` : ''}
        `;

        render();
    }

    // Deselect tree
    function deselectTree() {
        selectedTree = null;
        selectedTreeEl.textContent = 'none';
        detailPanel.classList.add('hidden');
        detailTitle.textContent = 'Select a tree';
        detailContent.innerHTML = '<p class="detail-hint">Click on a tree marker to view details</p>';
        render();
    }

    // Close detail panel
    function closeDetail() {
        deselectTree();
    }

    // Toggle grid
    function toggleGrid() {
        showGrid = !showGrid;
        toggleGridBtn.classList.toggle('active', showGrid);
        render();
    }

    // Toggle labels
    function toggleLabels() {
        showLabels = !showLabels;
        toggleLabelsBtn.classList.toggle('active', showLabels);
        render();
    }

    // Start
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
