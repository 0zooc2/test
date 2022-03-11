import * as THREE from 'three';

var scene, camera, renderer;

let cube;

function Init(perentScene, perentCamera, perentRenderer) {
    scene = perentScene;
    camera = perentCamera;
    renderer = perentRenderer;

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
};

function CubeAnimate() {
    requestAnimationFrame(CubeAnimate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
};

export {Init, CubeAnimate, cube};