// Three.js visualization
// Uses ES modules with import map defined in base.njk

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function initThreeScene(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    camera.position.set(3, 2, 3);

    // Renderer setup with alpha for transparency
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(ambientLight);
    scene.add(directionalLight);

    // Clock for animation
    const clock = new THREE.Clock();

    // Hologram shader material with Zenburn colors
    const vertexShader = `
        varying vec3 vNormal;
        varying vec2 vUv;
        varying vec3 vPosition;
        varying vec3 vWorldPosition;

        void main() {
            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            vWorldPosition = worldPos.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            vNormal = normalize(normalMatrix * normal);
            vUv = uv;
            vPosition = position;
        }
    `;

    const fragmentShader = `
        uniform float u_time;
        uniform vec2 u_resolution;

        varying vec3 vNormal;
        varying vec2 vUv;
        varying vec3 vPosition;
        varying vec3 vWorldPosition;

        vec3 zenburnPalette(float t) {
            vec3 colors[5];
            colors[0] = vec3(0.498, 0.624, 0.498);  // #7F9F7F - soft green
            colors[1] = vec3(0.486, 0.722, 0.733);  // #7CB8BB - soft blue
            colors[2] = vec3(0.800, 0.573, 0.573);  // #CC9393 - soft red
            colors[3] = vec3(0.875, 0.686, 0.561);  // #DFAF8F - soft orange
            colors[4] = vec3(0.941, 0.871, 0.686);  // #F0DFAF - soft yellow

            float colorIndex = floor(t * 5.0);
            float colorBlend = fract(t * 5.0);

            int idx1 = int(mod(colorIndex, 5.0));
            int idx2 = int(mod(colorIndex + 1.0, 5.0));

            return mix(colors[idx1], colors[idx2], smoothstep(0.0, 1.0, colorBlend));
        }

        void main() {
            vec2 uv = vUv;
            float time = u_time * 0.2;

            float scanlines = sin(uv.y * 800.0) * 0.5 + 0.5;
            float flicker = sin(u_time * 60.0) * 0.05 + 0.95;

            vec3 baseColor = zenburnPalette(time * 0.1 + uv.y * 0.2);

            float edge = 1.0 - abs(dot(vNormal, normalize(cameraPosition - vWorldPosition)));
            edge = pow(edge, 1.5);

            vec3 color = baseColor * scanlines * flicker;

            float pulse = sin(u_time * 1.5) * 0.05 + 0.95;

            color = mix(color, baseColor * 1.5, edge * pulse);

            float opacity = 0.7 * (edge + 0.3) * pulse;

            gl_FragColor = vec4(color, opacity);
        }
    `;

    const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
            u_time: { value: 0.0 },
            u_resolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) }
        },
        transparent: true,
        side: THREE.DoubleSide
    });

    // Model and logo objects
    let model = null;
    let logoObjects = [];

    const textureLoader = new THREE.TextureLoader();

    // Create logo circle around the model
    function createLogoCircle(logoTexture) {
        logoObjects.forEach(obj => scene.remove(obj));
        logoObjects = [];

        const logoMaterial = new THREE.MeshBasicMaterial({
            map: logoTexture,
            transparent: true,
            side: THREE.DoubleSide,
            opacity: 0.3,
            alphaTest: 0.1
        });

        const count = 8;
        const aspect = logoTexture.image.width / logoTexture.image.height;
        const width = 1.2;
        const height = width / aspect;

        for (let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const radius = 2.5;

            const geometry = new THREE.PlaneGeometry(width, height);
            const logoPlane = new THREE.Mesh(geometry, logoMaterial);

            logoPlane.position.set(
                Math.cos(angle) * radius,
                (Math.sin(angle) * radius) / 2,
                Math.sin(angle) * radius
            );

            logoPlane.lookAt(0, 0, 0);
            logoPlane.userData = { angle, radius };
            scene.add(logoPlane);
            logoObjects.push(logoPlane);
        }

        // Hide loading indicator
        const loadingEl = container.querySelector('.loading-indicator');
        if (loadingEl) loadingEl.style.display = 'none';
    }

    // Load logo texture
    textureLoader.load(
        '/assets/images/logo_transparent_black_inverted.png',
        createLogoCircle,
        undefined,
        () => {
            textureLoader.load('/assets/images/q_blk_32.png', createLogoCircle);
        }
    );

    // Load model
    function loadModel() {
        const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        model = new THREE.Mesh(geometry, material);
        scene.add(model);

        const loader = new GLTFLoader();
        loader.load(
            '/assets/images/qube.glb',
            (gltf) => {
                if (model) scene.remove(model);
                model = gltf.scene;
                model.traverse((child) => {
                    if (child.isMesh) {
                        child.material = material;
                    }
                });
                scene.add(model);
            },
            undefined,
            (error) => {
                console.log('Using cube fallback', error);
            }
        );
    }

    loadModel();

    // Animation loop
    function animate() {
        const elapsedTime = clock.getElapsedTime();

        if (material) {
            material.uniforms.u_time.value = elapsedTime;
        }

        logoObjects.forEach((logo) => {
            logo.lookAt(camera.position);
            const angle = logo.userData.angle + elapsedTime * 0.2;
            const radius = logo.userData.radius;
            logo.position.x = Math.cos(angle) * radius;
            logo.position.z = Math.sin(angle) * radius;
            logo.position.y = (Math.sin(angle * 2) * radius) / 2;
        });

        if (model) {
            model.rotation.y = elapsedTime * 0.3;
        }

        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }

    animate();

    // Handle resize
    function handleResize() {
        const width = container.clientWidth;
        const height = container.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);

        if (material && material.uniforms.u_resolution) {
            material.uniforms.u_resolution.value.set(width, height);
        }
    }

    window.addEventListener('resize', handleResize);
}

// Auto-init when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initThreeScene('three-container'));
} else {
    initThreeScene('three-container');
}

export { initThreeScene };
