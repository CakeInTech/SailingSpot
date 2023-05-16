import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import boatsSlice from './Boats/boatSlice';
import reservationsSlice from '../Redux/Reservations/reservationsReducer';
import userslice from '../redux/userslice';
import detailSlice from './Boats/detailSlice';

const reducer = combineReducers({
  boats: boatsSlice,
  reservations: reservationsSlice,
  user: userslice,
  boatsId: detailSlice
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;