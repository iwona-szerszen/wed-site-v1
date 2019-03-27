import callApi from '../util/apiCaller';

// Export Constants
export const LOAD_GUESTS = 'LOAD_GUESTS';
export const LOAD_GUEST = 'LOAD_GUEST';
export const EDIT_GUEST = 'EDIT_GUEST';

// Export Actions
export function loadGuests(guests) {
	return {
		type: LOAD_GUESTS,
		guests,
	};
}

export function fetchGuestsRequest() {
	return dispatch => {
		return callApi('guests').then(res => dispatch(loadGuests(res)));
	};
}

export function loadGuest(guest) {
	return {
		type: LOAD_GUEST,
		guest,
	};
}

export function fetchGuestRequest(id) {
	return dispatch => {
		return callApi(`guests/${id}`).then(res => dispatch(loadGuest(res)));
	};
}

export function editGuest(guestUpdated) {
	return {
		type: EDIT_GUEST,
		guestUpdated,
	};
}

export function editGuestRequest(id, guest) {
	return dispatch => {
		return callApi(`guests/${id}`, 'put', {
			guest: {
				responded: guest.responded,
				attended: guest.attended,
			},
		}).then(res => dispatch(editGuest(res)));
	};
}