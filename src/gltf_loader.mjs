async function LoadToScene(THREEobjects, target) {
    return new Promise(function (resolve, reject) {
        THREEobjects.loader.load(target.modelingFile,
            (gltf) => {
                THREEobjects.scene.add(gltf.scene.children[0]);
                THREEobjects.renderer.render(THREEobjects.scene, THREEobjects.scene.children[0]); // 나중에 렌더함수 호출하는걸로
                resolve();
            },
            (progress) => {
                //console.log(`Mesh : ${target.name} Loading...`);
            },
            (error) => {
                console.log(`Mesh : ${target.name} Load Failed.`);
            }
        );
    });
};

export {LoadToScene};