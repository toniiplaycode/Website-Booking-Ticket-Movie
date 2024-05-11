import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    CrWithFilm: {},
    status: 'idle',
    error: null,
};


export const fetchCrWithFilm = createAsyncThunk('crWithFilm/apiCrWithFilm', async (filmId) => {
    const res = await axios.get(`http://localhost:8000/api/calendarRelease/getAllWithFilmId?filmId=${filmId}`);
    return res.data.all;
});
  
const apiCrWithFilm = createSlice({
    name: 'apiCrWithFilm',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCrWithFilm.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCrWithFilm.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.CrWithFilm = action.payload;
        })
        .addCase(fetchCrWithFilm.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
},
});
  
  export default apiCrWithFilm.reducer;