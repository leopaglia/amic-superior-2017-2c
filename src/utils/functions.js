const { pow, E } = Math;

export const linear = (a, b) => x => a * x + b;
export const quadratic = (a, b, c) => x => a * pow(x, 2) + b * x + c;
export const exponential = (a, b) => x => b * pow(E, a * x);
export const potential = (a, b) => x => b * pow(x, a);
export const hyperbolic = (a, b) => x => a / (b + x);
