import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    films: [],
    status: 'idle',
    error: null,
};

export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {
    const response = await axios.get('http://localhost:8000/api/film/getAll');
    return response.data;
});
  
const apiFilms = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchFilms.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchFilms.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.films = action.payload;
        })
        .addCase(fetchFilms.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
},
});
  
  export default apiFilms.reducer;