import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function MouseControl() {
    window.THREEobjects.controls = new OrbitControls(window.THREEobjects.camera, window.THREEobjects.renderer.domElement);
    window.THREEobjects.controls.enableDamping = true;
};

export {MouseControl};