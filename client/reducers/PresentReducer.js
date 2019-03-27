import { ADD_PRESENTS, RESERVE_PRESENT, CANCEL_PRESENT_RESERVATION } from '../actions/PresentActions';

// Initial State
const initialState = { data: [] };

const PresentReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRESENTS:
			return {
				data: action.presents,
			};
		case RESERVE_PRESENT:
			return {
				data: state.data.map(present => {
					return present._id === action.present._id ? Object.assign({}, present, {reserved: action.present.reserved}) : present;
				}),
			};
		case CANCEL_PRESENT_RESERVATION:
			return {
				data: state.data.map(present => {
					return present._id === action.presentId ? Object.assign({}, present, {reserved: false}) : present;
				}),
			};
		default:
			return state;
	}
};

// Selector: Get all presents
export const getPresents = state => state.presents.data;

export default PresentReducer;