import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartIsOpen: false
};

const modalSlice = createSlice({
  name: "modalReducer",
  initialState,
  reducers: {
    setCartOpen(state, action) {
      state.cartIsOpen = action.payload
    }
  }
});

export const { setCartOpen } = modalSlice.actions;

export default modalSlice.reducer;
