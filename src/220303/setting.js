let scene, renderer;

function Init(THREE) {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({ antialias: true });
    document.getElementById('root').appendChild(renderer.domElement);
};

export {Init, scene, renderer};