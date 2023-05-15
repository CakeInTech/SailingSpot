import { combineReducers, configureStore } from '@reduxjs/toolkit';
import boatsSlice from '../Redux/Boats/boatsReducer';
import reservationsSlice from '../Redux/Reservations/reservationsReducer';
import userslice from './userslice';

const reducer = combineReducers({
  boats: boatsSlice,
  reservations: reservationsSlice,
  users: userslice,
});

const store = configureStore({
  reducer,
});

export default store;
