import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import boatSlice from "../boat/boatSlice";
import detailSlice from "../boat/detailSlice";

const store = configureStore({
    reducer: {
      boats: boatSlice,
      boatsId: detailSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;
