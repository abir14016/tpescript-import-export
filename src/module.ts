export const add = (param1: number, param2: number): number => {
  return param1 + param2;
};

export const sub = (param1: number, param2: number): number => {
  return param1 - param2;
};
export const mul = (param1: number, param2: number): number => {
  return param1 * param2;
};

export const div = (param1: number, param2: number): number => {
  return param1 / param2;
};

export const avg = (param1: number, param2: number): number => {
  return add(param1, param2) / 2;
};
