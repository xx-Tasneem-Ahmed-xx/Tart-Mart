import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: { items: [] },
  reducers: {
    setCheckoutItems: (state, action) => {
      state.items = action.payload;
    },
    clearCheckout: (state) => {
      state.items = [];
    },
  },
});

export const { setCheckoutItems, clearCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
