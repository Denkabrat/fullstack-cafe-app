import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false
};

const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload
    }
  }
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
