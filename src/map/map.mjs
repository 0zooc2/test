import * as Map1 from './map1.mjs';
import * as Map_benchmark from './map_benchmark.mjs';

const map = AssignMap(Map1);

function AssignMap(targetMap) {
    return targetMap.map;
}

export { map };