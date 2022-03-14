import { MainScript } from './builder.mjs';
import { EnvironmentBuild } from './environment.mjs';
import { MouseControl } from './mouse.mjs';
import { Animate } from './animate.mjs';


// main components build
const THREEobjects = window.THREEobjects = new MainScript();
THREEobjects.SetAxesHelper(); // dev option


// environment build
const environment = new EnvironmentBuild();
environment.RendererCustomizing();
environment.SceneCustomizing();
environment.SetCamera();
environment.SetLights();
environment.MeshBuild();


// controller
MouseControl();


// animate
THREEobjects.animate = new Animate();


// THREEobjects log
console.log(THREEobjects);


// traffic test
/*
var i = 0;
var test1 = setInterval(() => {
    THREEobjects.animate.Enqueue();
    i++;
    i > 500 && clearInterval(test1);
}, 4);
*/