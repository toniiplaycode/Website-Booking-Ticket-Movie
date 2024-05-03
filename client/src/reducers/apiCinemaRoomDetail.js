import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    CinemaRoomDetail: {},
    status: 'idle',
    error: null,
};

export const fetchCinemaRoomDetail = createAsyncThunk('cinemaRoomDetail/apiCinemaRoomDetail', async (cinemaRoomId) => {
    const res = await axios.get(`http://localhost:8000/api/cinemaRoom/getDetail?id=${cinemaRoomId}`);
    return res.data.data;
});
  
const apiCinemaRoomDetail = createSlice({
    name: 'apiCinemaRoomDetail',
    initialState,
    reducers: {
        handleClearSelectedCinemaRoomDetail(state, action) {
            state.CinemaRoomDetail = {};
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCinemaRoomDetail.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCinemaRoomDetail.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.CinemaRoomDetail = action.payload;
        })
        .addCase(fetchCinemaRoomDetail.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
},
});

export const { handleClearSelectedCinemaRoomDetail } = apiCinemaRoomDetail.actions;

 export default apiCinemaRoomDetail.reducer;