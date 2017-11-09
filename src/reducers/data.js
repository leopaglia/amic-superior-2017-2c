import { CHANGE_DATA } from '../actions';
import { Data } from '../utils/constants';

export default function(state = Data.INTERMEDIATE, action) {
	switch(action.type) {
		case CHANGE_DATA:
			return action.payload;
		default:
			return state;
	}
}
