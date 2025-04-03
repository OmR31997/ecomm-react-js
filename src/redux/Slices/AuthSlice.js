import { createSlice } from "@reduxjs/toolkit";

const token = localStorage.getItem("token");

export const AuthSlice = createSlice({
    name: "Auth",
    initialState: {isAuthenticated: false},
    reducers: {
        logIn: (state) => {
            state.isAuthenticated = true;
        },
        logOut: (state) => {
            state.isAuthenticated = false;
            localStorage.removeItem("token");
            localStorage.removeItem("user")
        }
    }
}) 

export const {logIn, logOut} = AuthSlice.actions;

export default AuthSlice.reducer
