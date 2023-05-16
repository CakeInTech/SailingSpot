import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reservations: [],
  status: 'idle',
  error: null,
};

export const getReservations = createAsyncThunk('sailspot/reservations', async (user_id) => {
  const response = await axios.get(`/api/v1/users/${user_id}/reservations`);
  if (response.data) {
    return response.data;
  }
  return [];
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