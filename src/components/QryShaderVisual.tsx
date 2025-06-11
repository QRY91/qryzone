// components/QryShaderVisual.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function QryShaderVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    // Make scene background transparent
    scene.background = null;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(3, 2, 3);

    // Renderer setup with alpha for transparency
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight,
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // Set clear color with 0 alpha for transparency
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

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

    // Hologram shader material
    const createHologramMaterial = () => {
      // Vertex shader (simplified)
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

      // Hologram fragment shader
      const fragmentShader = `
        uniform float u_time;
        uniform vec2 u_resolution;

        varying vec3 vNormal;
        varying vec2 vUv;
        varying vec3 vPosition;
        varying vec3 vWorldPosition;

        // Utility for color palette
        vec3 palette(float t) {
          vec3 a = vec3(0.5, 0.5, 0.5);
          vec3 b = vec3(0.5, 0.5, 0.5);
          vec3 c = vec3(1.0, 1.0, 1.0);
          vec3 d = vec3(0.0, 0.33, 0.67);
          return a + b * cos(6.28318 * (c * t + d));
        }

        void main() {
          vec2 uv = vUv;
          float time = u_time;

          // Hologram scanlines
          float scanlines = sin(uv.y * 800.0) * 0.5 + 0.5;

          // Hologram flicker
          float flicker = sin(time * 160.0) * 0.1 + 0.9;

          // Base hologram color - using cyan/blue colors
          vec3 holoColor = vec3(0.0, 0.8, 1.0);

          // Add some color shifting
          holoColor = palette(time * 0.1 + uv.y);

          // Edge detection for hologram effect
          float edge = 1.0 - abs(dot(vNormal, normalize(cameraPosition - vWorldPosition)));
          edge = pow(edge, 2.0);

          // Combine effects
          vec3 color = holoColor * scanlines * flicker;
          color *= edge + 0.2;

          // Adjust opacity for transparency
          float opacity = 0.9 * (edge + 0.3);

          gl_FragColor = vec4(color, opacity);
        }
      `;

      return new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          u_time: { value: 0.0 },
          u_resolution: {
            value: new THREE.Vector2(
              containerRef.current?.clientWidth || 800,
              containerRef.current?.clientHeight || 600,
            ),
          },
        },
        transparent: true,
        side: THREE.DoubleSide,
      });
    };

    // Create shader material
    const material = createHologramMaterial();

    // Load model and create logo circle
    let model: THREE.Group | null = null;
    let logoObjects: THREE.Mesh[] = [];

    const textureLoader = new THREE.TextureLoader();

    // Load black logo texture
    textureLoader.load(
      "/logo_transparent_black_inverted.png", // Use white logo
      (texture) => {
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

        // Create logo circle once texture is loaded
        createLogoCircle(texture);
        setLoaded(true);
      },
      undefined,
      (error) => {
        console.error("Error loading logo texture:", error);
        // Try to load fallback
        textureLoader.load("/q_blk_32.png", (texture) => {
          createLogoCircle(texture);
          setLoaded(true);
        });
      },
    );

    // Load the cube model
    const loadModel = () => {
      // Default cube geometry as fallback
      const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
      model = new THREE.Mesh(geometry, material);
      scene.add(model);

      // Try to load the qube model
      const loader = new GLTFLoader();
      loader.load(
        "/qube.glb", // Place your model in the public folder
        (gltf) => {
          if (model) scene.remove(model);

          model = gltf.scene;
          model.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              (child as THREE.Mesh).material = material;
            }
          });

          scene.add(model);
        },
        undefined,
        (error) => {
          console.log("Error loading GLTF model, using cube fallback", error);
        },
      );
    };

    // Create a circle of logo planes around the model
    const createLogoCircle = (logoTexture: THREE.Texture) => {
      // Clear existing logos
      logoObjects.forEach((obj) => scene.remove(obj));
      logoObjects = [];

      const logoMaterial = new THREE.MeshBasicMaterial({
        map: logoTexture,
        transparent: true,
        side: THREE.DoubleSide,
        opacity: 0.3,
        alphaTest: 0.1,
      });

      // Create 8 logo planes (matching 8x8 restriction)
      const count = 8;
      const aspect = logoTexture.image.width / logoTexture.image.height;
      const width = 1.5;
      const height = width / aspect;

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const radius = 2.5;

        const geometry = new THREE.PlaneGeometry(width, height);
        const logoPlane = new THREE.Mesh(geometry, logoMaterial);

        logoPlane.position.set(
          Math.cos(angle) * radius,
          (Math.sin(angle) * radius) / 2,
          Math.sin(angle) * radius,
        );

        logoPlane.lookAt(0, 0, 0);
        logoPlane.userData = { angle, radius };
        scene.add(logoPlane);
        logoObjects.push(logoPlane);
      }
    };

    // Load the model
    loadModel();

    // Animation loop
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Update shader time
      if (material) {
        material.uniforms.u_time.value = elapsedTime;
      }

      // Make logo planes face camera
      logoObjects.forEach((logo) => {
        logo.lookAt(camera.position);

        // Add some subtle animation to logo positions
        const angle = logo.userData.angle + elapsedTime * 0.2;
        const radius = logo.userData.radius;
        logo.position.x = Math.cos(angle) * radius;
        logo.position.z = Math.sin(angle) * radius;
        logo.position.y = (Math.sin(angle * 2) * radius) / 2;
      });

      // Auto-rotate model
      if (model) {
        model.rotation.y = elapsedTime * 0.3;
      }

      // Update controls
      controls.update();

      // Render scene
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    // Start animation loop
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);

      if (material && material.uniforms.u_resolution) {
        material.uniforms.u_resolution.value.set(width, height);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", handleResize);

      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // Dispose resources
      material.dispose();
      renderer.dispose();

      logoObjects.forEach((obj) => {
        obj.geometry.dispose();
        (obj.material as THREE.Material).dispose();
        scene.remove(obj);
      });

      if (model) scene.remove(model);
    };
  }, []);

  return (
    <div className="qry-shader-container">
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "400px",
          position: "relative",
          // Add a thin border around the viewport
          border: "1px solid var(--color-border)",
        }}
      >
        {!loaded && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "1rem",
              color: "var(--color-accent)",
            }}
          >
            Loading visualization...
          </div>
        )}
      </div>
    </div>
  );
}
