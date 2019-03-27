import { combineReducers } from 'redux';

// Import Reducers
import guests from './reducers/GuestReducer';
import presents from './reducers/PresentReducer';
import dedications from './reducers/DedicationReducer';

export default combineReducers({
	guests,
	presents,
	dedications,
});