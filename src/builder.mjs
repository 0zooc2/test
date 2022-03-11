import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

class MainScript {
    constructor() {
        this.THREE = THREE,
        this.scene = new THREE.Scene(),
        this.renderer = new THREE.WebGLRenderer(),
        this.loader = new GLTFLoader(),
        this.camera = '',
        this.lights = {
            dynamicLight: ''
        },
        this.mouseControl,
        this.keyboardControl;
        document.getElementById('root').appendChild(this.renderer.domElement);
    };

    SetCamera() {
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.z = 10;
        this.camera.position.y = 10;
        this.scene.add(this.camera);

        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.Render();
    };

    SetDynamicLight() {
        this.lights.dynamicLight = new THREE.SpotLight();
        this.lights.dynamicLight.position.set(5, 5, 5);
        this.scene.add(this.lights.dynamicLight);
    };

    SetAxesHelper() {
        this.scene.add(new THREE.AxesHelper(10));
    };

    Render() {
        this.renderer.render(this.scene, this.camera);
    };

    onWindowResize() {
        this.THREEobjects.camera.aspect = window.innerWidth / window.innerHeight;
        this.THREEobjects.camera.updateProjectionMatrix();
        this.THREEobjects.renderer.setSize(window.innerWidth, window.innerHeight);
        this.THREEobjects.Render();
    };
};

export {MainScript};