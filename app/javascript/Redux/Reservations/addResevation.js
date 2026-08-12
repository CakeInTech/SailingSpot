import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status: null,
};

const baseUrl = `${window.location.origin}/api/v1`;

export const reserveBoat = createAsyncThunk(
  'reservations/reserveBoat', async (payload, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/reservations`, {
        reservation: payload,
      },);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const reservationReducer = createSlice({
  name: 'addReservation',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
    .addCase(reserveBoat.pending, (state) => ({
      ...state,
      status: 'pending',
    }))
    .addCase(reserveBoat.fulfilled, (state) => ({
      ...state,
      status: 'fulfilled',
    }))
    .addCase(reserveBoat.rejected, (state) => ({
      ...state,
      status: 'rejected',
    }))
  }
})

export default reservationReducer.reducer;
