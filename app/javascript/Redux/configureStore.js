import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import boatsSlice from './Boats/boatSlice';
import reservationsSlice from './Reservations/reservationsReducer';
import userslice from './userslice';
import detailSlice from './Boats/detailSlice';
import authorizationReducer from './Services/authorizationService';
const reducer = combineReducers({
  boats: boatsSlice,
  reservations: reservationsSlice,
  user: userslice,
  boatsId: detailSlice,
  authorization: authorizationReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;