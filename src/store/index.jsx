import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/store/productsSlice";
import singleProductReducer from "@/store/singleProductSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
  },
});

export default store;
