import { LoadToScene } from './gltf_loader.mjs';

class Mesh {
    constructor(THREEobjects, name, role, mesh, position, rotation, scale, material, physics, model, animation) {
        this.THREEmesh,
        this.role = role,
        this.mesh = mesh,                                   //type
        this.name = `${mesh}(origin)`,
        this.position = {
            x: position.x,
            y: position.y,
            z: position.z
        },
        this.rotation = {
            x: rotation.x,
            y: rotation.y,
            z: rotation.z
        },
        this.scale = {
            x: scale.x,
            y: scale.y,
            z: scale.z
        },
        this.materialAttribute = material,                  // material attribute in json
        this.physicsAttribute = physics,                    // physics attribute in json
        this.modelingFile = model,                          // modeling file
        this.animationScript = animation,                   // animating script
        this.isClone = false,
        this.visible = true;

        LoadToScene(THREEobjects, this).then(() => {
            this.THREEmesh = THREEobjects.scene.children[THREEobjects.scene.children.length - 1];
            this.THREEmesh.visible = this.visible;
        });
    };
}

class ClonedMesh extends Mesh{
    constructor(data, THREEmesh, name, role, THREEmaterial, THREEphysics) {
        super();
        this.THREE.mesh = THREEmesh;
        this.name = name;
        this.role = role;
        this.THREE.material = THREEmaterial;
        this.THREE.physics = THREEphysics;
        this.isClone = true;
        this.visible = false;
    }

    //getter / setter 만들어야 함.
}

export {Mesh, ClonedMesh};