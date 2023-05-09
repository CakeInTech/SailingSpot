import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import boatSlice from "../boat/boatSlice";
import reservationSlice from "../boat/reservationSlice";

const store = configureStore({
    reducer: {
      boat: boatSlice,
      reservation: reservationSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;
