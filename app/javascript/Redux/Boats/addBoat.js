import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: null,
};

const baseUrl = `${window.location.origin}/api/v1`;

export const createBoat = createAsyncThunk(
  "boats/create",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/boats`, { boat: payload });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const addBoatSlice = createSlice({
  name: "newBoat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBoat.pending, (state) => ({
        ...state,
        status: "pending",
      }))
      .addCase(createBoat.fulfilled, (state, action) => ({
        ...state,
        status: "success",
      }))
      .addCase(createBoat.rejected, (state, action) => ({
        ...state,
        status: "rejected",
      }));
  },
});

export default addBoatSlice.reducer;
