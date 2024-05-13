import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: 'idle',
    error: null,
};


export const checkExpiredTicket = createAsyncThunk('checkExpiredTicket/apiCheckExpiredTicket', async () => {
    const res = await axios.get(`http://localhost:8000/api/ticket/updateStatusExpired`);
    return res.data.message;
});
  
const apiCheckExpiredTicket = createSlice({
    name: 'checkExpiredTicket',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(checkExpiredTicket.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(checkExpiredTicket.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.films = action.payload;
        })
        .addCase(checkExpiredTicket.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
},
});
  
  export default apiCheckExpiredTicket.reducer;