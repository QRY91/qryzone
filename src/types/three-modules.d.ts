/**
 * Type declarations for Three.js modules used in the project
 */

// Define key Three.js types for better compatibility
declare namespace THREE {
  export interface Object3DEventMap {
    [key: string]: any;
  }

  export interface Object3D<T extends Object3DEventMap = Object3DEventMap> {
    position: Vector3;
    rotation: Euler;
    scale: Vector3;
    userData: any;
    
    lookAt(target: Vector3 | Object3D): this;
    traverse(callback: (object: Object3D) => void): void;
    add(object: Object3D): this;
    remove(object: Object3D): this;
  }

  export interface Material {
    dispose(): void;
  }

  export interface Geometry {
    dispose(): void;
  }

  export interface Mesh<
    TGeometry extends Geometry = Geometry,
    TMaterial extends Material = Material,
    TEventMap extends Object3DEventMap = Object3DEventMap
  > extends Object3D<TEventMap> {
    isMesh: true;
    geometry: TGeometry;
    material: TMaterial;
  }

  export interface Group<T extends Object3DEventMap = Object3DEventMap> extends Object3D<T> {
    isGroup: true;
  }

  export class Vector3 {}
  export class Euler {}
}

// GLTFLoader module declaration
declare module "three/examples/jsm/loaders/GLTFLoader" {
  import { Loader, Group, Object3D } from "three";

  export interface GLTF {
    scene: THREE.Object3D;
    scenes: THREE.Object3D[];
    animations: any[];
    cameras: any[];
    asset: any;
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