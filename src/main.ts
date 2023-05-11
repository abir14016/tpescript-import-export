import * as Methods from "./module"; //wildcut import

const add = (param1: number, param2: number, param3: number): number => {
  return param1 + param2 + param3;
};

const result1 = add(1, 2, 3);
const result2 = Methods.avg(2, 4);
console.log(result2);
