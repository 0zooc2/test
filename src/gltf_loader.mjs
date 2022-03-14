function LoadToScene(THREEobjects, target, amount) {
    THREEobjects.resolver = new Promise(function (resolve, reject) {
        THREEobjects.loader.load(target.modelingFile,
            (gltf) => {
                THREEobjects.scene.add(gltf.scene.children[0]);
                target.THREEmesh = THREEobjects.scene.children[THREEobjects.scene.children.length - 1];
                THREEobjects.meshes.origin.length === amount && resolve();
            },
            (progress) => {},
            (error) => {console.log(`Mesh : ${target.name} Load Failed.`)}
        );
    });
};

export { LoadToScene };