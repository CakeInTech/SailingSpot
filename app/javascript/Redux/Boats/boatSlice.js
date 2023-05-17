import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  boats: [],
  status: null,
};

const baseUrl = `${window.location.origin}/api/v1`;

export const fetchBoatData = createAsyncThunk(
  "fetchBoatData",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/boats`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const boatSlice = createSlice({
  name: "boats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoatData.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(fetchBoatData.fulfilled, (state, action) => ({
        ...state,
        status: "fulfilled",
        boats: action.payload,
      }))
      .addCase(fetchBoatData.rejected, (state) => ({
        ...state,
        status: "rejected",
      }));
  },
});

export const allBoats = (state) => state.boats.boats;
export const allStatus = (state) => state.boats.status;

export default boatSlice.reducer;
