import { add as summation, sub } from "./module"; //normal import/named import

const add = (param1: number, param2: number, param3: number): number => {
  return param1 + param2 + param3;
};

const result = summation(1, 2);
