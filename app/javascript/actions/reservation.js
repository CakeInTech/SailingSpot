import { createAsyncThunk } from "@reduxjs/toolkit";
reserve_url = `${window.location.origin}api/v1/users/1/reservations`;
import axios from "axios";

const ADD_RESERVE = "SAILINGSPORT/app/javascript/actions/ADD_RESERVE";
const DISPLAY_RESERVE = "SAILINGSPORT/app/javascript/actions/DISPLAY_RESERVE";
export const addReserve = createAsyncThunk(ADD_RESERVE, async (reserve) => {
  await fetch(reserve_url, {
    method: "POST",
    body: JSON.stringify(reserve),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return reserve;
});

export const dipslayReserveData = createAsyncThunk(DISPLAY_RESERVE, async (thunkAPI) => {
  try {
    const response = await axios.get(reserve_url);
    console.log(response);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
