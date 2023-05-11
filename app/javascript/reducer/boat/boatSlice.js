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
    extraReducers: (builder) => {
      builder
      .addCase(fetchBoatData.pending, (state) => ({
          ...state,
          status: 'loading',
        }))
      .addCase(fetchBoatData.fulfilled, (state, action) => {
        const isFulfilled = state;
        isFulfilled.status = 'fulfilled';
        isFulfilled.boats = action.payload;
      })
      .addCase(fetchBoatData.rejected, (state) => {
        const isRejected = state;
        isRejected.status = 'rejected';
      });
    },
});

export default boatSlice.reducer;
