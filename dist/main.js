"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("./module");
const add = (param1, param2, param3) => {
    return param1 + param2 + param3;
};
const result1 = add(1, 2, 3);
const result2 = (0, module_1.add)(2, 4);
console.log(result1, result2);
