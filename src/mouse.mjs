import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function OrbitControl() {
    const controls = new OrbitControls(window.THREEobjects.camera, window.THREEobjects.renderer.domElement);
    controls.enableDamping = true;
};

export {OrbitControl};