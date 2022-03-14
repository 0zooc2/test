// material libararies
import * as Tree1Material from './material/tree1.mjs';

// texture libraries
import Posx from './texture/background/cubemap/citadella2/posx.jpg';
import Posy from './texture/background/cubemap/citadella2/posy.jpg';
import Posz from './texture/background/cubemap/citadella2/posz.jpg';
import Negx from './texture/background/cubemap/citadella2/negx.jpg';
import Negy from './texture/background/cubemap/citadella2/negy.jpg';
import Negz from './texture/background/cubemap/citadella2/negz.jpg';

// physics libararies
import * as Tree1Physics from './physics/tree1.mjs';

// modelling file
import GroundGlb from './model/ground.glb';
import Mountain1Glb from './model/mountain1.glb';
import Rock1Glb from './model/rock1.glb';
import Rock2Glb from './model/rock2.glb';
import Rock3Glb from './model/rock3.glb';
import Tree1Glb from './model/tree1.glb';
import Tree2Glb from './model/tree2.glb';

// animation libararies
import * as Tree1Animation from './animation/tree1.mjs';

export const map = {
    size: {
        width: 1000,
        height: 1000,
        depth: 1000,
        unit: 1
    },
    renderer: {
        shadowMap: {
            enabled: true,
            type: "PCFSoftShadowMap"
        }
    },
    scene: {
        fog: {
            enabled: true,
            color: 0xefd1b5,
            density: 0.02
        },
        background: {
            enabled: true,
            color: 0xefd1b5,
            cubeMap: {
                enabled: false,
                file: {
                    posx: Posx,
                    posy: Posy,
                    posz: Posz,
                    negx: Negx,
                    negy: Negy,
                    negz: Negz,
                },
                encoding: 'sRGBEncoding'
            },
            equirecMap: {
                enabled: false,
                file: '',
                mapping: '',
                encoding: ''
            }
        }
    },
    camera:{
        type: "PerspectiveCamera",
        fov: 75,
        focus: 10,
        near: 0.1,
        far: 1000,
        zoom: 1,
        focalLength: 15
    },
    lights:[
        {
            type: "DirectionalLight",
            name: "sunlight",
            color: 0xffffff,
            intensity: 1,
            castShadow: true,
            position: {x: 0, y: 20, z: 0},
            shadow: {
                mapSize: {
                    width: 2048,
                    height: 2048
                },
                camera: {
                    near: 0.1,
                    far: 1000
                }
            },
            target: ''
        }
    ],
    shader: [
        {
            name: "shader1"
        }
    ],
    includes: {
        OriginMeshes: [
            {
                role: "ground",
                mesh: "ground1",
                name: "ground1",
                position: {x: 0, y: 0, z: 0},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 0, y: 0, z: 0},
                castShadow: true,
                receiveShadow: true,
                material: '',
                physics: '',
                model: GroundGlb,
                animation: ''
            },
            {
                role: "non-interaction object",
                mesh: "tree1",
                name: "tree1",
                position: {x: 0, y: 0, z: 0},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 0, y: 0, z: 0},
                castShadow: true,
                receiveShadow: true,
                material: Tree1Material.attribute,
                physics: Tree1Physics.src,
                model: Tree1Glb,
                animation: Tree1Animation.src
            },
            {
                role: "non-interaction object",
                mesh: "tree2",
                name: "tree2",
                position: {x: 0, y: 0, z: 0},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 0, y: 0, z: 0},
                castShadow: true,
                receiveShadow: true,
                material: '',
                physics: '',
                model: Tree2Glb,
                animation: ''
            },
            {
                role: "non-interaction object",
                mesh: "rock1",
                name: "rock1",
                position: {x: 0, y: 0, z: 0},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 0, y: 0, z: 0},
                castShadow: true,
                receiveShadow: true,
                material: '',
                physics: '',
                model: Rock1Glb,
                animation: ''
            },
            {
                role: "non-interaction object",
                mesh: "rock2",
                name: "rock2",
                position: {x: 0, y: 0, z: 0},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 0, y: 0, z: 0},
                castShadow: true,
                receiveShadow: true,
                material: '',
                physics: '',
                model: Rock2Glb,
                animation: ''
            },
            {
                role: "non-interaction object",
                mesh: "rock3",
                name: "rock3",
                position: {x: 0, y: 0, z: 0},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 0, y: 0, z: 0},
                castShadow: true,
                receiveShadow: true,
                material: '',
                physics: '',
                model: Rock3Glb,
                animation: ''
            },
        ],
        ClonedMeshes: [// 각 메쉬별로 이름이 무조건 달라야함, material에 직접 적는 것은 위 origin material attribute에 덮어씌우는 것.
            {
                role: "ground",
                mesh: "ground1",
                name: "ground1",
                position: {x: 0, y: -1.7, z: 0},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 1, y: 1, z: 1},
                castShadow: true,
                receiveShadow: true,
                material: '',
                physics: '',
                model: GroundGlb,
                animation: ''
            },
            {
                role: "ground",
                mesh: "ground1",
                name: "ground2",
                position: {x: 21, y: -1.7, z: -21},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 1, y: 1, z: 1},
                castShadow: true,
                receiveShadow: true,
                material: '',
                physics: '',
                model: GroundGlb,
                animation: ''
            },
            {
                role: "ground",
                mesh: "ground1",
                name: "ground3",
                position: {x: 21, y: -1.7, z: 0},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 1, y: 1, z: 1},
                castShadow: true,
                receiveShadow: true,
                material: '',
                physics: '',
                model: GroundGlb,
                animation: ''
            },
            {
                role: "ground",
                mesh: "ground1",
                name: "ground4",
                position: {x: 21, y: -1.7, z: 21},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 1, y: 1, z: 1},
                castShadow: true,
                receiveShadow: true,
                material: '',
                physics: '',
                model: GroundGlb,
                animation: ''
            },
            {
                role: "ground",
                mesh: "ground1",
                name: "ground5",
                position: {x: 0, y: -1.7, z: -21},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 1, y: 1, z: 1},
                castShadow: true,
                receiveShadow: true,
                material: '',
                physics: '',
                model: GroundGlb,
                animation: ''
            },
            {
                role: "ground",
                mesh: "ground1",
                name: "ground6",
                position: {x: 0, y: -1.7, z: 21},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 1, y: 1, z: 1},
                castShadow: true,
                receiveShadow: true,
                material: '',
                physics: '',
                model: GroundGlb,
                animation: ''
            },
            {
                role: "ground",
                mesh: "ground1",
                name: "ground7",
                position: {x: -21, y: -1.7, z: -21},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 1, y: 1, z: 1},
                castShadow: true,
                receiveShadow: true,
                material: '',
                physics: '',
                model: GroundGlb,
                animation: ''
            },
            {
                role: "ground",
                mesh: "ground1",
                name: "ground8",
                position: {x: -21, y: -1.7, z: 0},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 1, y: 1, z: 1},
                castShadow: true,
                receiveShadow: true,
                material: '',
                physics: '',
                model: GroundGlb,
                animation: ''
            },
            {
                role: "ground",
                mesh: "ground1",
                name: "ground9",
                position: {x: -21, y: -1.7, z: 21},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 1, y: 1, z: 1},
                castShadow: true,
                receiveShadow: true,
                material: '',
                physics: '',
                model: GroundGlb,
                animation: ''
            },
            {
                role: "non-interaction object",
                mesh: "tree1",
                name: "tree1",
                position: {x: 28, y: 0, z: 30},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 1, y: 1, z: 1},
                castShadow: true,
                receiveShadow: true,
                material: {
                    color: 0xffffff
                },
                physics: '',
                model: Tree1Glb,
                animation: ''
            },
            {
                role: "non-interaction object",
                mesh: "tree1",
                name: "tree2",
                position: {x: 27, y: 0, z: 27},
                rotation: {x: 0, y: 30, z: 0},
                scale: {x: 0.6, y: 0.6, z: 0.6},
                castShadow: true,
                receiveShadow: true,
                material: {
                    color: 0xffff00
                },
                physics: '',
                model: Tree1Glb,
                animation: ''
            },
            {
                role: "non-interaction object",
                mesh: "tree1",
                name: "tree2",
                position: {x: 24, y: 0, z: 27},
                rotation: {x: 0, y: 90, z: 0},
                scale: {x: 1.3, y: 1.3, z: 1.3},
                castShadow: true,
                receiveShadow: true,
                material: {
                    color: 0xffffff
                },
                physics: '',
                model: Tree1Glb,
                animation: ''
            },
            {
                role: "non-interaction object",
                mesh: "tree1",
                name: "tree3",
                position: {x: 19, y: 0, z: 25},
                rotation: {x: 0, y: 35, z: 0},
                scale: {x: 0.8, y: 0.8, z: 0.8},
                castShadow: true,
                receiveShadow: true,
                material: {
                    color: 0xff0000
                },
                physics: '',
                model: Tree1Glb,
                animation: ''
            },
            {
                role: "non-interaction object",
                mesh: "tree1",
                name: "tree4",
                position: {x: 19, y: 0, z: 19},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 0.4, y: 0.4, z: 0.4},
                castShadow: true,
                receiveShadow: true,
                material: {
                    color: 0xffffff
                },
                physics: '',
                model: Tree1Glb,
                animation: ''
            },
            {
                role: "non-interaction object",
                mesh: "tree1",
                name: "tree5",
                position: {x: 27, y: 0, z: 17},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 1, y: 1, z: 1},
                castShadow: true,
                receiveShadow: true,
                material: {
                    color: 0xffffff
                },
                physics: '',
                model: Tree1Glb,
                animation: ''
            },
            {
                role: "non-interaction object",
                mesh: "tree1",
                name: "tree4",
                position: {x: 19, y: 0, z: 19},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 1.3, y: 1.3, z: 1.3},
                castShadow: true,
                receiveShadow: true,
                material: {
                    color: 0xffffff
                },
                physics: '',
                model: Tree1Glb,
                animation: ''
            },
            {
                role: "non-interaction object",
                mesh: "tree2",
                name: "tree",
                position: {x: 31, y: 0, z: 28},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 1, y: 1, z: 1},
                castShadow: true,
                receiveShadow: true,
                material: '',
                physics: '',
                model: Tree2Glb,
                animation: ''
            },
        ]
    }
};