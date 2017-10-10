export const ADD_POINT = 'ADD_POINT';
export const REMOVE_POINT = 'REMOVE_POINT';
export const CHANGE_APPROXIMATION = 'CHANGE_APPROXIMATION';

export function addPoint(point) {
	return {
		type: ADD_POINT,
		payload: point
	}
}

export function removePoint(point) {
	return {
		type: REMOVE_POINT,
		payload: point
	}
}

export function changeApproximation(approximation) {
	return {
		type: CHANGE_APPROXIMATION,
		payload: approximation
	}
}
