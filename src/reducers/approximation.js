import { CHANGE_APPROXIMATION } from '../actions';
import { Approximations } from '../utils/constants';

export default function(state = Approximations.LINEAR, action) {
	switch(action.type) {
		case CHANGE_APPROXIMATION:
			return action.payload;
		default:
			return state;
	}
}
