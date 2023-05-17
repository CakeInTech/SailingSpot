import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import boatsSlice from './Boats/boatSlice';
import reservationsSlice from './Reservations/reservationsReducer';
import userslice from './userslice';
import detailSlice from './Boats/detailSlice'
import authorizationSlice from './Services/authorizationService';
import statusSlice from './Boats/statusSlice';
const reducer = combineReducers({
  boats: boatsSlice,
  reservations: reservationsSlice,
  user: userslice,
  boatsId: detailSlice,
  authorization: authorizationSlice,
  statusSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;