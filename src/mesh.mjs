class Mesh {
    constructor(THREEobjects, role, mesh, name, position, rotation, scale, castShadow, receiveShadow, material, physics, model, animation, amount, type) {
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
        this.castShadow = castShadow,
        this.receiveShadow = receiveShadow,
        this.materialAttribute = material,                  // material attribute in json
        this.physicsAttribute = physics,                    // physics attribute in json
        this.modelingFile = model,                          // modeling file
        this.animationScript = animation,                   // animating script
        this.isClone = false,
        this.visible = false;

        type === "origin" && (THREEobjects.meshes.origin.push(this), this.LoadToScene(THREEobjects, amount, type));
    };

    LoadToScene(THREEobjects, amount, type) {
        let self = this;
        THREEobjects.resolver = new Promise(function (resolve, reject) {
            THREEobjects.loader.load(self.modelingFile,
                (gltf) => {
                    self.THREEmesh = gltf.scene.children[0];
                    THREEobjects.scene.add(self.THREEmesh);
                    self.THREEmesh.visible = self.visible;
                    self.THREEmesh.name = self.name;
                    self.THREEmesh.position.set(...Object.values(self.position));
                    self.THREEmesh.rotation.set(...Object.values(self.rotation));
                    self.THREEmesh.scale.set(...Object.values(self.scale));
                    self.THREEmesh.castShadow = self.castShadow;
                    self.THREEmesh.receiveShadow = self.receiveShadow;

                    let i = 0;
                    THREEobjects.meshes.origin.forEach(element => {
                        !!element.THREEmesh && i++;
                        i === THREEobjects.meshes.origin.length && resolve("mesh");
                    })
                },
                (progress) => {},
                (error) => {console.log(`Mesh : ${self.name} Load Failed.`)}
            );
        });
    };
}

class ClonedMesh extends Mesh{
    constructor(THREEobjects, clonedTHREEmesh, role, mesh, name, position, rotation, scale, castShadow, receiveShadow, material, physics, model, animation, amount, type) {
        super(THREEobjects, role, mesh, name, position, rotation, scale, castShadow, receiveShadow, material, physics, model, animation, amount);
        this.THREEmesh = clonedTHREEmesh,
        this.name = `${name}(cloned)`,
        this.materialAttribute = material,                  // material attribute in json
        this.physicsAttribute = physics,                    // physics attribute in json
        this.modelingFile = model,                          // modeling file
        this.animationScript = animation,  
        this.isClone = true,
        this.visible = true,
        this.size = {
            x: Math.abs(this.THREEmesh.geometry.boundingBox.max.x) + Math.abs(this.THREEmesh.geometry.boundingBox.min.x),
            y: Math.abs(this.THREEmesh.geometry.boundingBox.max.y) + Math.abs(this.THREEmesh.geometry.boundingBox.min.y),
            z: Math.abs(this.THREEmesh.geometry.boundingBox.max.z) + Math.abs(this.THREEmesh.geometry.boundingBox.min.z)
        };

        type === "cloned" && (
            THREEobjects.meshes.cloned.push(this), 
            THREEobjects.scene.add(this.THREEmesh), 
            this.THREEmesh.visible = this.visible, 
            this.THREEmesh.name = this.name,
            this.THREEmesh.position.set(...Object.values(this.position)),
            this.THREEmesh.rotation.set(...Object.values(this.rotation)),
            this.THREEmesh.scale.set(...Object.values(this.scale)),
            this.THREEmesh.castShadow = this.castShadow,
            this.THREEmesh.receiveShadow = this.receiveShadow
        );
        
    }

    //getter, setter 만들어야 함.
}

export { Mesh, ClonedMesh };