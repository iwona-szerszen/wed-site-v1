import callApi from '../util/apiCaller';

// Export Constants
export const ADD_PRESENTS = 'ADD_PRESENTS';
export const RESERVE_PRESENT = 'RESERVE_PRESENT';
export const CANCEL_PRESENT_RESERVATION = 'CANCEL_PRESENT_RESERVATION';

// Export Actions
export function addPresents(presents) {
	return {
		type: ADD_PRESENTS,
		presents,
	};
}

export function fetchPresentsRequest() {
	return dispatch => {
		return callApi('presents').then(res => dispatch(addPresents(res)));
	};
}

export function reservePresent(present, guestId) {
	return {
		type: RESERVE_PRESENT,
		present,
		guestId,
	};
}

export function reservePresentRequest(presentId, guestId) {
	return dispatch => {
		return callApi(`presents/${presentId}/reserve`, 'put', { guestId })
			.then(res => dispatch(reservePresent(res, guestId)));
	};
}

export function cancelPresentReservation(presentId, guestUpdated) {
	return {
		type: CANCEL_PRESENT_RESERVATION,
		presentId,
		guestUpdated,
	};
}

export function cancelPresentReservationRequest(presentId, guestId) {
	return dispatch => {
		return callApi(`presents/${presentId}/cancel`, 'put', { guestId })
			.then(res => dispatch(cancelPresentReservation(presentId, res)));
	};
}