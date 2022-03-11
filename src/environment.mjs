import {map} from './map/map1.mjs'
import {Mesh, ClonedMesh} from './mesh.mjs'

function OriginMeshBuild(THREEobjects) {
    const originMeshClass = [];
    let i = 0;
    map.includes.createOriginMeshes.forEach(element => {
        originMeshClass[i] = new Mesh(THREEobjects, ...Object.values(element));
        i++;
    });
};

function ClonedMeshBuild(THREEobjects) {
    const testMesh = new Mesh(1,1,1,1,1,1,1,1,1,1);
    console.log(testMesh);
};

export {OriginMeshBuild, ClonedMeshBuild};