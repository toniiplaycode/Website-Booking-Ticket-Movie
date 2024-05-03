import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    selectedFilm: {},
}

const selectedPurchaseFilm = createSlice({
    name: "selectedPurchaseFilm",
    initialState,
    reducers: {
        hanleClearSelectedFilm(state, action) {
            state.selectedFilm = {};
        },
        hanleSelectedFilm(state, action) {
            state.selectedFilm = action.payload;
        }
    }
});

export const { hanleSelectedFilm, hanleClearSelectedFilm } = selectedPurchaseFilm.actions;

export default selectedPurchaseFilm.reducer;