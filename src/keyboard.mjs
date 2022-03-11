import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function ClonedMeshBuild(THREEobjects) {
    const testMesh = new Mesh(1,1,1,1,1,1,1,1,1,1);
    console.log(testMesh);
};

export {OriginMeshBuild, ClonedMeshBuild};