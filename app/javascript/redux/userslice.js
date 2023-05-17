import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const login = "/signin";

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    const response = await fetch(login, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    });
    const data = await response.json();
    if (response.status === 201) {
      return data;
    }
  }
);


const signUp = "/signup";

const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || {
    user_id: 0,
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    pending: false,
    success: false,
    rejected: false,
    errMassage: "",
    role: "",
    
  };

  const initialState = {
    user: userFromLocalStorage,
  };

export const registerUser = createAsyncThunk(
  "user/register",
  async ({ name, email, password, password_confirmation }, thunkAPI) => {
    const response = await fetch(signUp, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          name,
          email,
          password,
          password_confirmation,
        },
      }),
    });
    const data = await response.json();
    if (response.status === 201) {
      return data;
    }
  }
);

const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = initialState.user;
    },
  },
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
        newState.user_id = action.payload.id;
        newState.role = action.payload.role;
        localStorage.setItem("user", JSON.stringify(newState));
      })
      .addCase(registerUser.rejected, (state, action) => {
        const newState = state.user;
        newState.pending = false;
        newState.success = false;
        newState.rejected = true;
        // const err = action.payload((e) => e)
        //  newState.errMassage = err;
    })
    .addCase(loginUser.pending, (state) => {
      const newState = state.user;
      newState.pending = true;
      newState.rejected = false;
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      const newState = state.user;
      newState.pending = false;
      newState.success = true;
      newState.rejected = false;
      newState.name = action.payload.name;
      newState.email = action.payload.email;
      newState.user_id = action.payload.id;
      newState.role = action.payload.role;
      localStorage.setItem("user", JSON.stringify(newState));
    })
    .addCase(loginUser.rejected, (state, action) => {
      const newState = state.user;
      newState.pending = false;
      newState.success = false;
      newState.rejected = true;
      // const err = action.payload((e) => e)
      //  newState.errMassage = err;
    });
  },
});

export const userSelector = (state) => state.user.user;

export const { logout } = useSlice.actions;

export default useSlice.reducer;