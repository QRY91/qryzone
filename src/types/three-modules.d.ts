/**
 * Type declarations for Three.js modules used in the project
 */

// GLTFLoader module declaration
declare module "three/examples/jsm/loaders/GLTFLoader" {
  import { Loader, Object3D, AnimationClip, Camera } from "three";

  export interface GLTF {
    scene: Object3D;
    scenes: Object3D[];
    animations: AnimationClip[];
    cameras: Camera[];
    asset: Record<string, any>;
    parser: any;
    userData: any;
  }

  export class GLTFLoader extends Loader {
    constructor();
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
    parse(
      data: ArrayBuffer | string,
      path: string,
      onLoad: (gltf: GLTF) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
}

// OrbitControls module declaration
declare module "three/examples/jsm/controls/OrbitControls" {
  import { Camera, Vector3 } from "three";

  export class OrbitControls {
    constructor(camera: Camera, domElement?: HTMLElement);
    
    enabled: boolean;
    target: Vector3;
    
    enableDamping: boolean;
    dampingFactor: number;
    enableZoom: boolean;
    enableRotate: boolean;
    enablePan: boolean;
    autoRotate: boolean;
    autoRotateSpeed: number;
    
    update(): boolean;
    dispose(): void;
  }
}