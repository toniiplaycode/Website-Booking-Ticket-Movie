import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showDrawer: false,
}

const mobileNavSlide = createSlice({
    name: "mobileNav",
    initialState,
    reducers: {
        showDrawer(state) {
            state.showDrawer = true;
        },
        hiddenDrawer(state) {
            state.showDrawer = false;
        }
    },
});

export const { showDrawer, hiddenDrawer } = mobileNavSlide.actions;

export default mobileNavSlide.reducer;