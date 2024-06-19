import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    films: {},
    status: 'idle',
    error: null,
};

const getParamValue = () => {
    const currentURL = window.location.href;
    const searchParams = new URLSearchParams(new URL(currentURL).search);
    const id = searchParams.get('id');
    return id;
}

export const fetchFilmDetail = createAsyncThunk('apiFilmDetail/fetchFilmDetail', async () => {
    const res = await axios.get(`http://localhost:8000/api/film/getDetail?id=${getParamValue()}`);
    return res.data.data[0];
});
  
const apiFilmDetail = createSlice({
    name: 'apiFilmDetail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchFilmDetail.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchFilmDetail.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.films = action.payload;
        })
        .addCase(fetchFilmDetail.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
},
});
  
  export default apiFilmDetail.reducer;