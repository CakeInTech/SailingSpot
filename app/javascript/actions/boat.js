import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const baseUrl = `${window.location.origin}/api/v1`;

export const fetchBoatData = createAsyncThunk('fetchBoatData', async thunkAPI => {
    try {
        const response = await axios.get(`${baseUrl}/boats`);
        console.log(response)
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)
    }
});
