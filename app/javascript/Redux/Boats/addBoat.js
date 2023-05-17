import axios from 'axios';

const initialState = {
  added: false,
  error: '',
};

const ADD_BOAT_SUCCESS = 'ADD_BOAT_SUCCESS';
const ADD_BOAT_FAILURE = 'ADD_BOAT_FAILURE';

const addBoatSuccess = () => ({
  type: ADD_BOAT_SUCCESS,
});

const addBoatFailure = (error) => ({
  type: ADD_BOAT_FAILURE,
  error,
});

const addBoatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOAT_SUCCESS:
      return {
        ...state,
        added: true,
      };
    case ADD_BOAT_FAILURE:
      return {
        ...state,
        added: false,
        error: action.error.message,
      };
    default:
      return state;
  }
};

export const addBoat = (boat) => async (dispatch) => {
  console.log(boat)
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify(boat);
  await axios.post('/api/v1/boats', body, config)
    .then(() => {
      dispatch(addBoatSuccess());
    })
    .catch((error) => {
      dispatch(addBoatFailure(error.message));
    });
};

export default addBoatReducer;
