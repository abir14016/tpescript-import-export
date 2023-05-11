// import * as Methods from "./module"; //wildcard import
// import avg, { add as sum, mul, div } from "./module"; //named and default import

// import allFunctions from "./module";

// import addition from "./utils/add";
// import sub from "./utils/sub";
// import mul from "./utils/mul";
// import div from "./utils/div";

import Methods from "./utils/imdex";

const add = (param1: number, param2: number, param3: number): number => {
  return param1 + param2 + param3;
};

const result1 = add(1, 2, 3);
const result2 = Methods.summation(4, 5);
console.log(result2);
// const result2 = addition(1, 2);
