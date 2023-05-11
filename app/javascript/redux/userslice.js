import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const signUp = "/signup"
const initialState = {
    user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        pending: true,
        success: false,
        rejected: false,
        errMassage: '',
    }
}
export const registerUser = createAsyncThunk(
    'user/register',
    async ({name, email, password, password_confirmation}, thunkAPI) => {
        const response = await fetch(signUp, {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: {
                name,
                email,
                password,
                password_confirmation
            }
        })
        })
        const data = await response.json()
        if(response.status === 201) {
            return data;
        }
    }
)

const useSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, (state) => {
            const newState = state.user;
            newState.pending = true;
            newState.rejected = false;
        })

        .addCase(registerUser.fulfilled, (state, action) => {
            const newState = state.user;
            newState.pending = false;
            newState.success = true;
            newState.rejected = false;
            newState.name = action.payload.name;
            newState.email = action.payload.email;
        })

        .addCase(registerUser.rejected, (state, action) => {
            const newState = state.user;
            newState.pending = false;
            newState.success = false;
            newState.rejected = true;
            // const err = action.payload((e) => e)
            //  newState.errMassage = err;
        })
    }

})

export const userSelector = (state) => state.user;

export default  useSlice.reducer;