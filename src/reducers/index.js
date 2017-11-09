import { combineReducers } from 'redux';
import PointsReducer from './points';
import ApproximationReducer from './approximation';
import DataReducer from './data';

const rootReducer = combineReducers({
  approximation: ApproximationReducer,
	data: DataReducer,
	points: PointsReducer
});

export default rootReducer;
