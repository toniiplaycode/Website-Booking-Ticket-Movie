import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    search: null,
}

const searchFilm = createSlice({
    name: "searchFilm",
    initialState,
    reducers: {
        searchHandle(state, action) {
            state.search = action.payload;
        }
    }
});

export const { searchHandle } = searchFilm.actions;

export default searchFilm.reducer;