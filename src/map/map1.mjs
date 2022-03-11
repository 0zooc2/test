// material libararies
import * as Tree1Material from './material/tree1.mjs';

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
    includes: {
        createOriginMeshes: [
            {
                role: "ground",
                mesh: "ground",
                name: "ground1",
                position: {x: 0, y: 0, z: 0},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 0, y: 0, z: 0},
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
                material: Tree1Material.src,
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
                material: '',
                physics: '',
                model: Rock3Glb,
                animation: ''
            },
        ],
        createClonedMeshes: [
            {
                role: "tree",
                mesh: "tree1",
                name: "obj1",
                position: {x: 0, y: 0, z: 0},
                rotation: {x: 0, y: 0, z: 0},
                scale: {x: 0, y: 0, z: 0},
                material: '',
                physics: '',
                model: '',
                animation: ''
            },
        ]
    }
};