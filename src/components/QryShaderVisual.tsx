// components/QryShaderVisual.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function QryShaderVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  // Use a ref to track initialization to prevent double rendering
  const initializedRef = useRef(false);

  useEffect(() => {
    // Only initialize once to prevent duplicate scenes
    if (!containerRef.current || initializedRef.current) return;
    initializedRef.current = true;

    // Dynamically import Three.js modules
    const loadDependencies = async () => {
      // Type declarations for the modules we'll import dynamically
      type GLTFLoaderType = typeof import("three/examples/jsm/loaders/GLTFLoader");
      type OrbitControlsType = typeof import("three/examples/jsm/controls/OrbitControls");

      // Dynamic imports that will be resolved at runtime, not build time
      const GLTFLoaderModule = await import(
        "three/examples/jsm/loaders/GLTFLoader"
      ) as GLTFLoaderType;
      const OrbitControlsModule = await import(
        "three/examples/jsm/controls/OrbitControls"
      ) as OrbitControlsType;

      const GLTFLoader = GLTFLoaderModule.GLTFLoader;
      const OrbitControls = OrbitControlsModule.OrbitControls;

      initScene(GLTFLoader, OrbitControls);
    };

    // Initialize the scene with dynamically loaded modules
    const initScene = (
      GLTFLoader: new () => THREE.Loader,
      OrbitControls: new (camera: THREE.Camera, domElement: HTMLElement) => any
    ) => {
      // Scene setup
      const scene = new THREE.Scene();
      // Make scene background transparent
      scene.background = null;

      // Camera setup
      const camera = new THREE.PerspectiveCamera(
        75,
        containerRef.current!.clientWidth / containerRef.current!.clientHeight,
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
        containerRef.current!.clientWidth,
        containerRef.current!.clientHeight,
      );
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      // Set clear color with 0 alpha for transparency
      renderer.setClearColor(0x000000, 0);
      containerRef.current!.appendChild(renderer.domElement);

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

        // Hologram fragment shader with Zenburn colors
        const fragmentShader = `
          uniform float u_time;
          uniform vec2 u_resolution;

          varying vec3 vNormal;
          varying vec2 vUv;
          varying vec3 vPosition;
          varying vec3 vWorldPosition;

          // Color palette generator for Zenburn-inspired colors
          vec3 zenburnPalette(float t) {
            // Define Zenburn color palette
            // Soft green, blue, red, orange, yellow
            vec3 colors[5];
            colors[0] = vec3(0.498, 0.624, 0.498);  // #7F9F7F - soft green
            colors[1] = vec3(0.486, 0.722, 0.733);  // #7CB8BB - soft blue
            colors[2] = vec3(0.800, 0.573, 0.573);  // #CC9393 - soft red
            colors[3] = vec3(0.875, 0.686, 0.561);  // #DFAF8F - soft orange
            colors[4] = vec3(0.941, 0.871, 0.686);  // #F0DFAF - soft yellow

            // Smooth transition between colors based on time
            float colorIndex = floor(t * 5.0);
            float colorBlend = fract(t * 5.0);

            // Get the two colors to blend between
            int idx1 = int(mod(colorIndex, 5.0));
            int idx2 = int(mod(colorIndex + 1.0, 5.0));

            // Smoothly interpolate between the two colors
            return mix(colors[idx1], colors[idx2], smoothstep(0.0, 1.0, colorBlend));
          }

          void main() {
            vec2 uv = vUv;
            float time = u_time * 0.2; // Slow down the color changes

            // Hologram scanlines
            float scanlines = sin(uv.y * 800.0) * 0.5 + 0.5;

            // Hologram flicker
            float flicker = sin(u_time * 60.0) * 0.05 + 0.95;

            // Get color from Zenburn palette
            vec3 baseColor = zenburnPalette(time * 0.1 + uv.y * 0.2);

            // Edge detection for hologram effect
            float edge = 1.0 - abs(dot(vNormal, normalize(cameraPosition - vWorldPosition)));
            edge = pow(edge, 1.5); // Soften the edge effect slightly

            // Combine effects
            vec3 color = baseColor * scanlines * flicker;

            // Add subtle pulse
            float pulse = sin(u_time * 1.5) * 0.05 + 0.95;

            // Edge glow effect using current palette color
            color = mix(color, baseColor * 1.5, edge * pulse);

            // Adjust opacity for transparency
            float opacity = 0.7 * (edge + 0.3) * pulse;

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

      // Load black logo texture instead of white
      textureLoader.load(
        "/logo_transparent_black_inverted.png", // Changed to black logo
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
            model.traverse((child: any) => {
              if (child.isMesh) {
                child.material = material;
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
          opacity: 0.3, // Changed from 0.9 to 0.3 as requested
          alphaTest: 0.1,
        });

        // Create 8 logo planes (matching 8x8 restriction)
        const count = 8;
        const aspect = logoTexture.image.width / logoTexture.image.height;
        const width = 1.2; // Reduced from 1.5 to 1.2 to make logos smaller
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

      // Return cleanup function
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
    };

    // Start loading dependencies
    loadDependencies();
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
          borderRadius: "var(--border-radius)",
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
