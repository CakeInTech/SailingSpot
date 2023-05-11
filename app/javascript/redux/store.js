import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userslice from './userslice';

// const initialState = {
//   signupResponse: []
// };

// const signupReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_SIGNUP_RESPONSE':
//       return { ...state, signupResponse: action.payload };
//     default:
//       return state;
//   }
// };

// const rootReducer = {
//   signup: signupReducer
// };


const store = configureStore(
    { reducer: userslice },
    applyMiddleware(thunk),
  );
export default store;
