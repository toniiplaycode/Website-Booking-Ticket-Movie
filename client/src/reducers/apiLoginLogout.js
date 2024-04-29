import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    inforUser: {},
    status: 'idle',
    error: null,
};

export const postLogin = createAsyncThunk('inforUser/apiLoginLogout', async (obj) => {
    const res = await axios.post(`http://localhost:8000/api/user/loginUser`, obj);
    return res.data;
});
  
const apiLoginLogout = createSlice({
    name: 'apiLoginLogout',
    initialState,
    reducers: {
        handleLogout(state, action) {
            state.inforUser = {}; 
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(postLogin.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(postLogin.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.inforUser = action.payload;
        })
        .addCase(postLogin.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
},
});

export const { handleLogout } = apiLoginLogout.actions;

export default apiLoginLogout.reducer;