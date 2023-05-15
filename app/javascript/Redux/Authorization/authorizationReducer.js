import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  authorization: [],
  status: 'idle',
  error: null,
};

export const getAuthorization = createAsyncThunk('sailspot/authorization', async () => {
  const response = await axios.get('/api/v1/authorization');
  if (response.data) {
    return response.data.authorization;
  }
  return [];
});

const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAuthorization.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAuthorization.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.authorization = action.payload;
      })
      .addCase(getAuthorization.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default authorizationSlice.reducer;