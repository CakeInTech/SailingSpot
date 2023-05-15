import { createSlice } from "@reduxjs/toolkit";
import { fetchDetailsData } from "../../actions/boat";

const initialState = {
    boatId: null,
    status: null,
}

const detailSlice =  createSlice({
  name: 'boats',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(fetchDetailsData.pending, (state) => ({
        ...state,
        status: "loading",
    }))
    .addCase(fetchDetailsData.fulfilled, (state, action) => ({
        ...state,
        status: "fulfilled",
        boatId: action.payload
    }))
    .addCase(fetchDetailsData.rejected, (state) => ({
        ...state,
        status: "rejected",
    }));
  },
});

export const allBoatsId = (state) => state.boatsId.boatId;
export const allStatus = (state) => state.boatsId.status;

export default detailSlice.reducer;
