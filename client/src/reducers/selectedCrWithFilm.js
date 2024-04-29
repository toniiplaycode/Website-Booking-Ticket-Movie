import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    selectedCrWithFilm: {},
}

const selectedCrWithFilm = createSlice({
    name: "selectedCrWithFilm",
    initialState,
    reducers: {
        hanleSelectedCrWithFilm(state, action) {
            state.selectedCrWithFilm = action.payload;
        },
        handleClearSelectedCrWithFilm(state, action) {
            state.selectedCrWithFilm = {};
        }
    }
});

export const { hanleSelectedCrWithFilm, handleClearSelectedCrWithFilm } = selectedCrWithFilm.actions;

export default selectedCrWithFilm.reducer;