import * as THREE from 'three';

export default function (cube) {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, Camera.camera );
};