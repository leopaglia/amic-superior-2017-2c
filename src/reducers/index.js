import { combineReducers } from 'redux';
import PointsReducer from './points';
import ApproximationReducer from './approximation';

const rootReducer = combineReducers({
  approximation: ApproximationReducer,
	points: PointsReducer
});

export default rootReducer;
