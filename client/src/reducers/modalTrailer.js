import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    showTrailer: false,
    film: {}
}

const modalTrailer = createSlice({
    name: "modalTrailer",
    initialState,
    reducers: {
        toggleTrailer(state) {
            state.showTrailer = !state.showTrailer;
        },
        saveFilm(state, action) {
            state.film = action.payload;
        }
    }
});

export const { toggleTrailer, saveFilm } = modalTrailer.actions;

export default modalTrailer.reducer;