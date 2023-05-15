import { combineReducers, configureStore } from '@reduxjs/toolkit';
import boatsSlice from './Boats/boatsReducer';
import reservationsSlice from './Reservations/reservationsReducer';
import authorizationReducer from './Authorization/authorizationReducer';

const reducer = combineReducers({
  boats: boatsSlice,
  reservations: reservationsSlice,
  authorization: authorizationReducer,
});

const store = configureStore({
  reducer,
});

export default store;
