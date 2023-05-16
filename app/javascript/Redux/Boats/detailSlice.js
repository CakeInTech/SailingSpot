import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  boatId: null,
  status: null,
};

const baseUrl = `${window.location.origin}/api/v1`;

export const fetchDetailsData = createAsyncThunk(
  "fetchDetailsData",
  async ({ boatsId }, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/boats/${boatsId}`);
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const detailSlice = createSlice({
  name: "boats",
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
        boatId: action.payload,
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
