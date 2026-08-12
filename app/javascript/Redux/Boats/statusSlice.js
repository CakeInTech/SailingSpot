import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

const baseUrl = `${window.location.origin}/api/v1`;

export const updateBoatStatus = createAsyncThunk('boatStatus', async (payload, thunkAPI) => {
    try {
        const response = await axios.put(`${baseUrl}/boats/${payload.id}`, {boat: payload.boat});
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data)
    }
});

const statusSlice = createSlice({
    name: 'boats',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(updateBoatStatus.pending, (state)  => ({
            ...state,
            status: "loading",
        }))
        .addCase(updateBoatStatus.fulfilled, (state, action) => ({
            ...state,
            status: "fulfilled",
            boats: action.payload,
        }))
        .addCase(updateBoatStatus.rejected, (state) => ({
            ...state,
            status: "rejected"
        }));
    }
})

export default statusSlice.reducer;
