import axios from 'axios';

const initialState = {
  removed: false,
  error: '',
};

const REMOVE_BOAT_SUCCESS = 'REMOVE_BOAT_SUCCESS';
const REMOVE_BOAT_FAILURE = 'REMOVE_BOAT_FAILURE';

const removeBoatSuccess = () => ({
  type: REMOVE_BOAT_SUCCESS,
});

const removeBoatFailure = (error) => ({
  type: REMOVE_BOAT_FAILURE,
  error,
});

const removeBoatReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_BOAT_SUCCESS:
      return {
        ...state,
        removed: true,
      };
    case REMOVE_BOAT_FAILURE:
      return {
        ...state,
        removed: false,
        error: action.error.message,
      };
    default:
      return state;
  }
};

export const removeBoat = (boat_id, boat) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify(boat);
  await axios.put(`/api/v1/boats/${boat_id}`, body, config)
    .then(() => {
      dispatch(removeBoatSuccess());
    })
    .catch((error) => {
      dispatch(removeBoatFailure(error.message));
    });
};

export default removeBoatReducer;
