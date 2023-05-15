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
      .addCase(fetchBoatData.fulfilled, (state, action) => ({
          ...state,
          status: "fulfilled",
          boats: action.payload
      }))
      .addCase(fetchBoatData.rejected, (state) => ({
          ...state,
          status: "rejected"
      }));
    },
});

export const allBoats = (state) => state.boats.boats;
export const allStatus = (state) => state.boats.status;

console.log("Message from the redux",allBoats, allStatus)

export default boatSlice.reducer;
