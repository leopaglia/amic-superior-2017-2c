import * as values from './values';

import {
	linearApproximation,
	quadraticApproximation,
	exponentialApproximation,
	potentialApproximation,
	hyperbolicApproximation
} from './approximations';


export const getLinearData = (points) => {
	const fn = linearApproximation(points);

	const headers = ['X', 'Y', 'X * Y', 'X^2', 'F(X)', 'E'];

	const data = points.map(point => [
		values.x(point),
		values.y(point),
		values.xy(point),
		values.x2(point),
		fn(values.x(point)),
		values.quadraticError(point, fn)
	]);

	const sums = [
		values.xsum(points),
		values.ysum(points),
		values.xysum(points),
		values.x2sum(points),
		'-',
		values.quadraticErrorSum(points, fn)
	];

	return {
		headers,
		data,
		sums
	};
};

export const getQuadraticData = (points) => {
	const fn = quadraticApproximation(points);

	const headers = ['X', 'Y', 'X^2', 'X^3', 'X^4', 'X * Y', 'X^2 * Y', 'F(X)', 'E'];

	const data = points.map(point => [
		values.x(point),
		values.y(point),
		values.x2(point),
		values.x3(point),
		values.x4(point),
		values.xy(point),
		values.x2y(point),
		fn(values.x(point)),
		values.quadraticError(point, fn)
	]);

	const sums = [
		values.xsum(points),
		values.ysum(points),
		values.x2sum(points),
		values.x3sum(points),
		values.x4sum(points),
		values.xysum(points),
		values.x2ysum(points),
		'-',
		values.quadraticErrorSum(points, fn)
	];

	return {
		headers,
		data,
		sums
	};
};

export const getExponentialData = (points) => {
	const fn = exponentialApproximation(points);

	const headers = ['X', 'Y', 'X^2', 'ln(X)', 'ln(Y)', 'X * ln(Y)', 'F(X)', 'E'];

	const data = points.map(point => [
		values.x(point),
		values.y(point),
		values.x2(point),
		values.lnx(point),
		values.lny(point),
		values.xlny(point),
		fn(values.x(point)),
		values.quadraticError(point, fn)
	]);

	const sums = [
		values.xsum(points),
		values.ysum(points),
		values.x2sum(points),
		values.lnxsum(points),
		values.lnysum(points),
		values.xlnysum(points),
		'-',
		values.quadraticErrorSum(points, fn)
	];

	return {
		headers,
		data,
		sums
	};
};

export const getPotentialData = (points) => {
	const fn = potentialApproximation(points);

	const headers = ['X', 'Y', 'ln(X)', 'ln(Y)', 'ln(X) * ln(Y)', 'ln^2(x)', 'F(X)', 'E'];

	const data = points.map(point => [
		values.x(point),
		values.y(point),
		values.lnx(point),
		values.lny(point),
		values.lnxlny(point),
		values.ln2x(point),
		fn(values.x(point)),
		values.quadraticError(point, fn)
	]);

	const sums = [
		values.xsum(points),
		values.ysum(points),
		values.lnxsum(points),
		values.lnysum(points),
		values.lnxlnysum(points),
		values.ln2xsum(points),
		'-',
		values.quadraticErrorSum(points, fn)
	];

	return {
		headers,
		data,
		sums
	};
};

export const getHyperbolicData = (points) => {
	const fn = hyperbolicApproximation(points);

	const headers = ['X', 'Y', '1 / X', '1 / Y', '1 / (X * Y)', '1 / X^2', 'F(X)', 'E'];

	const data = points.map(point => [
		values.x(point),
		values.y(point),
		values.invx(point),
		values.invy(point),
		values.invxinvy(point),
		values.invx2(point),
		fn(values.x(point)),
		values.quadraticError(point, fn)
	]);

	const sums = [
		values.xsum(points),
		values.ysum(points),
		values.invxsum(points),
		values.invysum(points),
		values.invxinvysum(points),
		values.invx2sum(points),
		'-',
		values.quadraticErrorSum(points, fn)
	];

	return {
		headers,
		data,
		sums
	};
};

export const getComparisonData = (points) => {
	const fns = {
		linear: linearApproximation(points),
		quadratic: quadraticApproximation(points),
		exponential: exponentialApproximation(points),
		potential: potentialApproximation(points),
		hyperbolic: hyperbolicApproximation(points)
	};

	const headers = ['X', 'Y', 'Lin', 'Cuad', 'Exp', 'Pot', 'Hip', 'Lin.err.', 'Cuad.err.', 'Exp.err.', 'Pot.err.', 'Hip.err.'];

	const data = points.map(point => {
		const x = values.x(point);
		return [
			values.x(point),
			values.y(point),
			fns.linear(x),
			fns.quadratic(x),
			fns.exponential(x),
			fns.potential(x),
			fns.hyperbolic(x),
			values.quadraticError(point, fns.linear),
			values.quadraticError(point, fns.quadratic),
			values.quadraticError(point, fns.exponential),
			values.quadraticError(point, fns.potential),
			values.quadraticError(point, fns.hyperbolic)
		]
	});

	const errorSums = [
		values.quadraticErrorSum(points, fns.linear),
		values.quadraticErrorSum(points, fns.quadratic),
		values.quadraticErrorSum(points, fns.exponential),
		values.quadraticErrorSum(points, fns.potential),
		values.quadraticErrorSum(points, fns.hyperbolic)
	].map(n => isNaN(n) ? Infinity : n);

	const worstApproximationIndex = errorSums.indexOf(Math.max(...errorSums));
	const bestApproximationIndex = errorSums.indexOf(Math.min(...errorSums));

	return { headers, data, worstApproximationIndex, bestApproximationIndex };
};
