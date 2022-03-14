import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

class MainScript {
    constructor() {
        this.THREE = THREE,
        this.scene = new THREE.Scene(),
        this.renderer = new THREE.WebGLRenderer(),
        this.loader = new GLTFLoader(),
        this.camera = '',
        this.lights = [],
        this.meshes = {
            origin: [],
            cloned: []
        },
        this.animate = {
            animateWorker: null
        },
        this.mouseControl,
        this.keyboardControl,
        this.resolver;

        document.getElementById('root').appendChild(this.renderer.domElement);
    };

    Render() {
        this.renderer.render(this.scene, this.camera);
    };

    SetAxesHelper() {
        this.scene.add(new THREE.AxesHelper(20));
    };
};

export { MainScript };