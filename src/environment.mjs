import { map } from './map/map.mjs'
import { Mesh, ClonedMesh } from './mesh.mjs'

/*
설정 순서
1. assign scene attribute
2. assign camera attribute
3. lights build
4. shader build, assign attribute
5. mesh build
6. assign mesh material attribute
7. assign mesh physics attribute
8. assign mesh animation attribute
*/

class EnvironmentBuild {
    constructor() {
        this.mainScript = window.THREEobjects;
    }

    RendererCustomizing() {
        let renderer = map.renderer;

        if(renderer.shadowMap.enabled) {
            this.mainScript.renderer.shadowMap.enabled = renderer.shadowMap.enabled;

            switch(renderer.shadowMap.type) {
                case "PCFShadowMap":
                    this.mainScript.renderer.shadowMap.type = this.mainScript.THREE.PCFShadowMap;
                    break;
                case "PCFSoftShadowMap":
                    this.mainScript.renderer.shadowMap.type = this.mainScript.THREE.PCFSoftShadowMap;
                    break;
            }
        }
    }

    SceneCustomizing() {
        let scene = map.scene;

        if(scene.fog.enabled) {
            this.mainScript.scene.fog = new this.mainScript.THREE.FogExp2(scene.fog.color, scene.fog.density);
        }
        if(scene.background.enabled) {
            if(scene.background.cubeMap.enabled) {
                let loader = new this.mainScript.THREE.CubeTextureLoader();
                let textureCube = loader.load([
                    scene.background.cubeMap.file.posx,
                    scene.background.cubeMap.file.negx,
                    scene.background.cubeMap.file.posy,
                    scene.background.cubeMap.file.negy,
                    scene.background.cubeMap.file.posz,
                    scene.background.cubeMap.file.negz,
                ]);
                switch(scene.background.cubeMap.encoding) {
                    case "sRGBEncoding" :
                        textureCube.encoding = this.mainScript.THREE.sRGBEncoding;
                        break;
                }
                this.mainScript.scene.background = textureCube;
            }else if(scene.background.equirecMap.enabled) {
                d
            }else {
                this.mainScript.scene.background = new this.mainScript.THREE.Color(scene.background.color);
            }
        }
    }

    SetCamera() {
        let camera = map.camera;

        switch(camera.type){
            case "PerspectiveCamera":
                this.mainScript.camera = new this.mainScript.THREE.PerspectiveCamera(
                    camera.fov,
                    window.innerWidth / window.innerHeight,
                    camera.near,
                    camera.far
                );
                this.mainScript.camera.focus = camera.focus;
                this.mainScript.camera.zoom = camera.zoom;
                this.mainScript.camera.setFocalLength(camera.focalLength);

                this.mainScript.camera.position.z = 10;
                this.mainScript.camera.position.y = 10;

                this.mainScript.camera.aspect = window.innerWidth / window.innerHeight;
                this.mainScript.camera.updateProjectionMatrix();
                this.mainScript.renderer.setSize(window.innerWidth, window.innerHeight);
                break;
            case "OrthographicCamera":
                break;
            case "ArrayCamera":
                break;
            case "CubeCamera":
                break;
            case "StereoCamera":
                break;
        }

        this.mainScript.scene.add(this.mainScript.camera);

        window.addEventListener('resize', () => {
            this.mainScript.camera.aspect = window.innerWidth / window.innerHeight;
            this.mainScript.camera.updateProjectionMatrix();
            this.mainScript.renderer.setSize(window.innerWidth, window.innerHeight);
            this.mainScript.Render();
        }, false);
    }

    SetLights() {
        let lights = map.lights;

        lights.forEach(element => {
            AddToScene(element, this);
        });

        function AddToScene(target, self) {
            switch(target.type) {
                case "AmbientLight":
                    break;
                case "DirectionalLight":
                    let lightObject = new self.mainScript.THREE.DirectionalLight(target.color, target.intensity);
                    
                    lightObject.name = target.name;
                    lightObject.castShadow = target.castShadow;
                    lightObject.position.set(...Object.values(target.position));
                    lightObject.shadow.mapSize.width = target.shadow.mapSize.width;
                    lightObject.shadow.mapSize.height = target.shadow.mapSize.height;
                    lightObject.shadow.camera.near = target.shadow.camera.near;
                    lightObject.shadow.camera.far = target.shadow.camera.far;

                    self.mainScript.scene.add(lightObject);
                    self.mainScript.lights.push(lightObject);
                    break;
                case "HemisphereLight":
                    break;
                case "PointLight":
                    break;
                case "RectAreaLight":
                    break;
                case "SpotLight":
                    break;
            }
        }
    }

    MeshBuild() {
        this.OriginMeshBuild();
        this.mainScript.resolver.then(() => this.ClonedMeshBuild());
    }

    OriginMeshBuild() {
        let originMeshes = map.includes.OriginMeshes;

        originMeshes.forEach(element => {
            new Mesh(this.mainScript, ...Object.values(element), originMeshes.length, "origin");
        });
    }

    ClonedMeshBuild() {
        let clonedMeshes = map.includes.ClonedMeshes;

        this.AssignOriginMaterial();
        this.mainScript.meshes.origin.forEach(originElement => {
            clonedMeshes.forEach(clonedElement => {
                clonedElement.mesh === originElement.mesh &&
                new ClonedMesh(this.mainScript, originElement.THREEmesh.clone(), ...Object.values(clonedElement), clonedMeshes.length, "cloned");
            });
        });
        this.AssignClonedMaterial()
    }

    AssignOriginMaterial() {
        this.mainScript.meshes.origin.forEach(originElement => {
            originElement.THREEmesh.material = new this.mainScript.THREE.MeshStandardMaterial();
            map.includes.OriginMeshes.forEach(mapElement => {
                !!mapElement.material && (
                    originElement.mesh === mapElement.mesh && (
                        Object.entries(mapElement.material).forEach(materialAttribute => {
                            originElement.THREEmesh.material.setValues({[materialAttribute[0]]: materialAttribute[1]});
                        })
                    )
                )
            })
        });
    }

    AssignClonedMaterial() {
        this.mainScript.meshes.cloned.forEach(clonedElement => {
            clonedElement.THREEmesh.material = clonedElement.THREEmesh.material.clone();
            map.includes.ClonedMeshes.forEach(mapElement => {
                clonedElement.name === `${mapElement.name}(cloned)` && (
                    !!mapElement.material && (
                        Object.entries(mapElement.material).forEach(materialAttribute => {
                            clonedElement.THREEmesh.material.setValues({[materialAttribute[0]]: materialAttribute[1]});
                        })
                    )
                )
            })
        });
    }
};

export { EnvironmentBuild };