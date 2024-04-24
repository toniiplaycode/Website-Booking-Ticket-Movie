import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    selected: '',
}

const selectedTypeFilm = createSlice({
    name: "selectedTypeFilm",
    initialState,
    reducers: {
        selectedType(state, action) {
            state.selected = action.payload;
        }
    }
});

export const { selectedType } = selectedTypeFilm.actions;

export default selectedTypeFilm.reducer;