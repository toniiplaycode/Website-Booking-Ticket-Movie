import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    showSignin: false,
    showSignup: false,
}

const modalSigninSignup = createSlice({
    name: "modalSigninSignup",
    initialState,
    reducers: {
        showSignin(state) {
            state.showSignin = true;
        },
        hiddenSignin(state) {
            state.showSignin = false;
        },
        showSignup(state) {
            state.showSignup = true;
        },
        hiddenSignup(state) {
            state.showSignup = false;
        }
    }
});

export const { showSignin, hiddenSignin, showSignup, hiddenSignup } = modalSigninSignup.actions;

export default modalSigninSignup.reducer;