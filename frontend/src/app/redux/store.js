import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { CartReducer } from "./features/cart";
import { movieApi } from "./services/movieApi";

export const store = configureStore({
    reducer: {
        cart: CartReducer,
        [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([movieApi.middleware])
})