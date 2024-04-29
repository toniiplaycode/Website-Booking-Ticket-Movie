import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    showSignin: false,
    showSignup: false,
}

const modalSigninSignup = createSlice({
    name: "modalSigninSignup",
    initialState,
    reducers: {
        toggleSignin(state) {
            state.showSignin = !state.showSignin;
        },
        toggleSignup(state) {
            state.showSignup = !state.showSignup;
        },
    }
});

export const { toggleSignin, toggleSignup } = modalSigninSignup.actions;

export default modalSigninSignup.reducer;