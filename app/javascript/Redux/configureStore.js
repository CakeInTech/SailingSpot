import { combineReducers, configureStore } from '@reduxjs/toolkit';
import boatsSlice from '../Redux/Boats/boatsReducer';
import reservationsSlice from '../Redux/Reservations/reservationsReducer';
import userslice from './userslice';
import authorizationReducer from './Authorization/authorizationReducer';

const reducer = combineReducers({
  boats: boatsSlice,
  reservations: reservationsSlice,
  users: userslice,
  authorization: authorizationReducer,
});

const store = configureStore({
  reducer,
});

export default store;
