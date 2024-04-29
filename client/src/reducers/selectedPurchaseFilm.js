import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    selectedFilm: {},
}

const selectedPurchaseFilm = createSlice({
    name: "selectedPurchaseFilm",
    initialState,
    reducers: {
        hanleSelectedFilm(state, action) {
            state.selectedFilm = action.payload;
        }
    }
});

export const { hanleSelectedFilm } = selectedPurchaseFilm.actions;

export default selectedPurchaseFilm.reducer;