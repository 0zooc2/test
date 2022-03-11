/*
import { fromEvent } from 'rxjs';
import { throttleTime, scan } from 'rxjs/operators'

fromEvent(document, 'click')
    .pipe(
        throttleTime(1000),
        scan(count => count + 1, 0)
    )
    .subscribe(count => console.log("clicked "+count+" times"));

*/

import * as THREE from 'three';
import * as Camera from './220303/camera';
import * as Mesh from './220303/mesh';
import * as Setting from './220303/setting';

var aaa;
//window.this.test = '';

console.log(window);

Setting.Init(THREE);
Camera.Init();
Mesh.Init(Setting.scene, Camera.camera, Setting.renderer);
Mesh.CubeAnimate();
