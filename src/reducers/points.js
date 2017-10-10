import _ from 'lodash';
import { ADD_POINT, REMOVE_POINT } from '../actions';

export default function(state = [], action) {
	switch(action.type) {
		case ADD_POINT:
			return _.sortBy(_.uniqWith([...state, action.payload], _.isEqual), 'x');
		case REMOVE_POINT:
			_.remove(state, action.payload);
			return [...state];
		default:
			return state;
	}
}
