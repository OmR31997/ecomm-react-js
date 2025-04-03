import {configureStore} from "@reduxjs/toolkit";
import CartReducer from "./Slices/CartSlice";
import AuthReducer from "./Slices/AuthSlice";

export const store = configureStore({
    reducer: {cart: CartReducer, auth: AuthReducer}
});