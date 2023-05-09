import { createSlice } from "@reduxjs/toolkit"
import { fetchBoatData } from "../../actions/boat"

const initialState = {
    boats: [],
    status: null,
}

const boatSlice = createSlice({
    name: 'boats',
    initialState,
    reducers: {},
    extraReducers: {
      [fetchBoatData.pending]: (state) => {
        const isPending = state;
        isPending.status = 'pending';
      },
      [fetchBoatData.fulfilled]: (state, action) => {
        const isFulfilled = state;
        isFulfilled.status = 'fulfilled';
        isFulfilled.boats = action.payload;
      },
      [fetchBoatData.rejected]: (state) => {
        const isRejected = state;
        isRejected.status = 'rejected';
      }
    }
})

export default boatSlice.reducer;
