import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    CinemaDetail: {},
    status: 'idle',
    error: null,
};

export const fetchCinemaDetail = createAsyncThunk('cinemaDetail/apiCinemaDetail', async (cinemaId) => {
    const res = await axios.get(`http://localhost:8000/api/cinema/getDetail?id=${cinemaId}`);
    return res.data.data;
});
  
const apiCinemaDetail = createSlice({
    name: 'apiCinemaDetail',
    initialState,
    reducers: {
        handleClearSelectedCinemaDetail(state, action) {
            state.CinemaDetail = {};
        },
    },
    extraReducers: (builder) => { 
        builder
        .addCase(fetchCinemaDetail.pending, (state) =>{
            state.status = 'loading';
        })
        .addCase(fetchCinemaDetail.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.CinemaDetail = action.payload;
        })
        .addCase(fetchCinemaDetail.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
},
});

export const { handleClearSelectedCinemaDetail } = apiCinemaDetail.actions;

export default apiCinemaDetail.reducer; 