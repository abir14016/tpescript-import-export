"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avg = exports.div = exports.mul = exports.sub = exports.add = void 0;
const add = (param1, param2) => {
    return param1 + param2;
};
exports.add = add;
const sub = (param1, param2) => {
    return param1 - param2;
};
exports.sub = sub;
const mul = (param1, param2) => {
    return param1 * param2;
};
exports.mul = mul;
const div = (param1, param2) => {
    return param1 / param2;
};
exports.div = div;
const avg = (param1, param2) => {
    return (0, exports.add)(param1, param2) / 2;
};
exports.avg = avg;
