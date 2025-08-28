import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import productsReducer from "@/store/productsSlice";
import singleProductReducer from "@/store/singleProductSlice";
import wishlistReducer from "@/store/wishlistSlice";
import cartReducer from "@/store/cartSlice";
import checkoutReducer from "@/store/checkoutSlice";

// Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishlist"], // only persist cart & wishlist
};

// Combine ALL reducers
const rootReducer = combineReducers({
  products: productsReducer,
  singleProduct: singleProductReducer,
  wishlist: wishlistReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
});

// Wrap root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PAUSE",
          "persist/FLUSH",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }),
});

// Persistor
export const persistor = persistStore(store);

export default store;
