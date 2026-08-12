import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  abilities: {},
  status: 'idle',
  error: null,
};
export const getAuthorization = createAsyncThunk('sailspot/authorization', async (thunkAPI) => {
  try {
    const response = await axios.get('/api/v1/abilities');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
const authorizationSlice = createSlice({
  name: 'abilities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAuthorization.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAuthorization.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.abilities = action.payload;
      })
      .addCase(getAuthorization.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export default authorizationSlice.reducer;