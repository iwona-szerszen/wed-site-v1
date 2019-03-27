import callApi from '../util/apiCaller';

// Export Constants
export const ADD_DEDICATIONS = 'ADD_DEDICATIONS';
export const ADD_DEDICATION = 'ADD_DEDICATION';
export const DELETE_DEDICATION = 'DELETE_DEDICATION';

// Export Actions
export function addDedications(dedications) {
  return {
    type: ADD_DEDICATIONS,
    dedications,
  };
}

export function fetchDedicationsRequest() {
  return dispatch => {
    return callApi('dedications').then(res => dispatch(addDedications(res)));
  };
}

export function addDedication(guestUpdated, dedication) {
  return {
    type: ADD_DEDICATION,
    guestUpdated,
    dedication,
  };
}

export function addDedicationRequest(dedication) {
  return dispatch => {
    return callApi('dedications', 'post', {
      dedication: {
        videoId: dedication.videoId,
        song: dedication.song,
        content: dedication.content,
        from: dedication.from,
      },
    }).then(res => dispatch(addDedication(res, dedication)));
  };
}

export function deleteDedication(dedicationId, guestUpdated) {
  return {
    type: DELETE_DEDICATION,
    dedicationId,
    guestUpdated,
  };
}

export function deleteDedicationRequest(dedicationId, guestId) {
  return dispatch => {
    return callApi(`dedications/${dedicationId}`, 'delete', { guestId })
      .then(res => dispatch(deleteDedication(dedicationId, res)));
  };
}