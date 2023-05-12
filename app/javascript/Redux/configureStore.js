import { combineReducers, configureStore } from '@reduxjs/toolkit';
import boatsSlice from '../Redux/Boats/boatsReducer';
import reservationsSlice from '../Redux/Reservations/reservationsReducer';

const reducer = combineReducers({
  boats: boatsSlice,
  reservations: reservationsSlice,
});

const store = configureStore({
  reducer,
});

export default store;
