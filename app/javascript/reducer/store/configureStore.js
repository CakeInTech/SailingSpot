import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import boatSlice from "../boat/boatSlice";

const store = configureStore({
    reducer: {
      boats: boatSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;
