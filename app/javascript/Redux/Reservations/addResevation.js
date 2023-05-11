import axios from 'axios';

const initialState = {
  added: false,
  error: '',
};

const ADD_RESERVATION_SUCCESS = 'ADD_RESERVATION_SUCCESS';
const ADD_RESERVATION_FAILURE = 'ADD_RESERVATION_FAILURE';

const addReservationSuccess = () => ({
  type: ADD_RESERVATION_SUCCESS,
});

const addReservationFailure = (error) => ({
  type: ADD_RESERVATION_FAILURE,
  error,
});

const addReservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION_SUCCESS:
      return {
        ...state,
        added: true,
      };
    case ADD_RESERVATION_FAILURE:
      return {
        ...state,
        added: false,
        error: action.error.message,
      };
    default:
      return state;
  }
};

export const addReservation = (reservation) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify(reservation);
  await axios.post('/api/v1/boats', body, config)
    .then(() => {
      dispatch(addReservationSuccess());
    })
    .catch((error) => {
      dispatch(addReservationFailure(error.message));
    });
};

export default addReservationReducer;
