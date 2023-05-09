import { createSlice } from "@reduxjs/toolkit";
import { displayReserveData } from "../../actions/reservation";

const initialState = {
  reserve: [],
  status: null
}

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: {
    [displayReserveData.pending]: (state) => {
      const isPending = state;
      isPending.state = 'Pending'
    },
    [displayReserveData.fulfilled]: (state, action) => {
      const isFulfilled = state;
      isFulfilled.state = 'Fulfilled';
      isFulfilled.reservations = action.payload;
    },
    [displayReserveData.fulfilled]: (state) => {
      const isRejected = state;
      isRejected.state = 'Rejected';
    }
  }
})
export default reservationSlice;