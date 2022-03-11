import { MainScript } from './builder.mjs';
import { OriginMeshBuild } from './environment.mjs';

//main components build
const THREEobjects = window.THREEobjects = new MainScript();
THREEobjects.SetCamera();
THREEobjects.SetDynamicLight();
THREEobjects.SetAxesHelper();
window.addEventListener('resize', THREEobjects.onWindowResize, false);

// environment build
OriginMeshBuild(THREEobjects);

THREEobjects.Render();


/*
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

function animate() {
    //requestAnimationFrame(animate)

    controls.update()

    renderer.render(scene, camera);
    //renderer.render();

    stats.update()
}

animate();
*/