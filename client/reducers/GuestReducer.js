import { LOAD_GUESTS, LOAD_GUEST, EDIT_GUEST } from '../actions/GuestActions';
import { CANCEL_PRESENT_RESERVATION } from '../actions/PresentActions';
import { ADD_DEDICATION, DELETE_DEDICATION } from '../actions/DedicationActions';

// Initial State
const initialState = { 
	data: [],
	userGuest: {
		_id: '',
		names: '',
		relationship: '',
		totalMembers: 0,
		responded: false,
		attended: false,
		presents: [],
		dedications: [],
	},
};

const GuestReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_GUESTS:
			return Object.assign({}, state, {data: action.guests});
		case LOAD_GUEST:
			return Object.assign({}, state, {userGuest: action.guest});
		case CANCEL_PRESENT_RESERVATION:
		case EDIT_GUEST:
		case ADD_DEDICATION:
		case DELETE_DEDICATION:
			return Object.assign({}, state, {userGuest: action.guestUpdated});
		default:
			return state;
	}
};

/* Selectors */

// Get all guests
export const getGuests = state => state.guests.data;

// Get userGuest
export const getUserGuest = state => state.guests.userGuest;

export default GuestReducer;