import axios from 'axios';

const initialState = {
  updated: false,
  error: '',
};

const UPDATE_RESERVATION_SUCCESS = 'UPDATE_RESERVATION_SUCCESS';
const UPDATE_RESERVATION_FAILURE = 'UPDATE_RESERVATION_FAILURE';

const updateReservationSuccess = () => ({
  type: UPDATE_RESERVATION_SUCCESS,
});

const updateReservationFailure = (error) => ({
  type: UPDATE_RESERVATION_FAILURE,
  error,
});

const updateReservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RESERVATION_SUCCESS:
      return {
        ...state,
        updated: true,
      };
    case UPDATE_RESERVATION_FAILURE:
      return {
        ...state,
        updated: false,
        error: action.error.message,
      };
    default:
      return state;
  }
};

export const updateReservation = (user_id, reservation_id, reservation) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify(reservation);
  await axios.put(`/api/v1/users/${user_id}/reservations/${reservation_id}`, body, config)
    .then(() => {
      dispatch(updateReservationSuccess());
    })
    .catch((error) => {
      dispatch(updateReservationFailure(error.message));
    });
};

export default updateReservationReducer;
