import { CHANGE_APPROXIMATION } from '../actions';

export default function(state = '', action) {
	switch(action.type) {
		case CHANGE_APPROXIMATION:
			return action.payload;
		default:
			return state;
	}
}
