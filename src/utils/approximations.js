import {
	linear,
	quadratic,
	exponential,
	hyperbolic,
	potential
} from './functions';

import valuesFor from './values';
import { solve } from 'linear-solve';

const {pow, E} = Math;

export const linearValues = points => {
	const n = points.length;
	const {xsum, ysum, xysum, x2sum} = valuesFor(points);
	const [a, b] = solve([[x2sum, xsum], [xsum, n]], [xysum, ysum]);

	return {a, b};
};

export const linearApproximation = points => {
	const {a, b} = linearValues(points);
	return linear(a, b);
};

export const quadraticValues = points => {
	const n = points.length;
	const {xsum, ysum, x2sum, x3sum, x4sum, xysum, x2ysum} = valuesFor(points);
	const [c, b, a] = solve([[n, xsum, x2sum], [xsum, x2sum, x3sum], [x2sum, x3sum, x4sum]], [ysum, xysum, x2ysum]);
	return {a, b, c};
};

export const quadraticApproximation = points => {
	const {a, b, c} = quadraticValues(points);
	return quadratic(a, b, c);
};

export const exponentialValues = points => {
	const n = points.length;
	const {xsum, x2sum, lnysum, xlnysum} = valuesFor(points);
	const [a, B] = solve([[x2sum, xsum], [xsum, n]], [xlnysum, lnysum]);
	const b = pow(E, B) || 0;
	return {a, b};
};

export const exponentialApproximation = points => {
	const {a, b} = exponentialValues(points);
	return exponential(a, b);
};

export const potentialValues = points => {
	const n = points.length;
	const {lnxsum, lnysum, lnxlnysum, ln2xsum} = valuesFor(points);
	let a = 0;
	let B = 0;
	try {
		[a, B] = solve([[ln2xsum, lnxsum], [lnxsum, n]], [lnxlnysum, lnysum]);
	} catch(e) {}
	a = a || 0;
	const b = pow(E, B) || 0;
	return {a, b};
};

export const potentialApproximation = points => {
	const {a, b} = potentialValues(points);
	return potential(a, b);
};

export const hyperbolicValues = points => {
	const n = points.length;
	const {invxsum, invysum, invxinvysum, invx2sum} = valuesFor(points);
	const [B, A] = solve([[invx2sum, invxsum], [invxsum, n]], [invxinvysum, invysum]);
	const a = 1 / A || 0;
	const b = B * a || 0;
	return {a, b};
};

export const hyperbolicApproximation = points => {
	const {a, b} = hyperbolicValues(points);
	return hyperbolic(a, b);
};
