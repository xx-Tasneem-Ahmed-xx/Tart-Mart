import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "@/store/productsSlice";
import singleProductReducer from "@/store/singleProductSlice";
import wishlistReducer from "@/store/wishListSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    singleProduct: singleProductReducer,
    wishlist: wishlistReducer,
  },
});

export default store;
