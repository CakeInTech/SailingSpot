import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import boatsSlice from './Boats/boatSlice';
import reservationsSlice from '../Redux/Reservations/reservationsReducer';
import userslice from '../redux/userslice';
import detailSlice from './Boats/detailSlice';
import statusSlice from './Boats/statusSlice';

const reducer = combineReducers({
  boats: boatsSlice,
  reservations: reservationsSlice,
  users: userslice,
  boatsId: detailSlice,
  statusSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
