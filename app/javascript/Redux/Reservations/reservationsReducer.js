import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reservations: [],
  status: 'idle',
  error: null,
};
const baseUrl = `/api/v1`

export const getReservations = createAsyncThunk('sailspot/reservations', async (thunkAPI) => {
   (baseUrl, "ORIGIN PATH HERE!!!")
  try {
     const response = await axios.get(`${baseUrl}/reservations`, {
      headers: {
        'Content-Type': 'application/json',
      }
     });
      ("here is the api response",response)
     return response.data;
  } catch (e){
     return thunkAPI.rejectWithValue(e.response.data)
  }
});

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReservations.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getReservations.fulfilled, (state, action) => ({
        ...state,
        status: 'succeeded',
        reservations: action.payload,
      }))
      .addCase(getReservations.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error.message,
      }));
  },
});

export default reservationsSlice.reducer;
