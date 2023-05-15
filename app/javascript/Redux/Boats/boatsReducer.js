import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  boats: [],
  status: 'idle',
  error: null,
};

export const getBoats = createAsyncThunk('sailspot/boats', async () => {
  const response = await axios.get('/api/v1/boats');
  if (response.data) {
    return response.data.boats;
  }
  return [];
});

const boatsSlice = createSlice({
  name: 'boats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBoats.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBoats.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.boats = action.payload;
      })
      .addCase(getBoats.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default boatsSlice.reducer;
