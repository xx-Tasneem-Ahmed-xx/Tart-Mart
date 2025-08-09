import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSingleProduct = createAsyncThunk(
  "singleProduct/fetchSingleProduct",
  async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default singleProductSlice.reducer;
