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
