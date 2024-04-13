import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    showTrailer: false,
}

const modalTrailer = createSlice({
    name: "modalTrailer",
    initialState,
    reducers: {
        toggleTrailer(state) {
            state.showTrailer = !state.showTrailer;
        },
    }
});

export const { toggleTrailer } = modalTrailer.actions;

export default modalTrailer.reducer;