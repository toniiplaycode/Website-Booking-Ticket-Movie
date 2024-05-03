import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    listAllUser: [],
    statusFetchAllUser: "idle",
    message: "",   
};

export const fetchAllUser = createAsyncThunk('message/apiAdminUser', async (_,thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token;  //lấy token bên apiLoginLogout
    const res = await axios.get(`http://localhost:8000/api/user/getAllUser`, {
        headers: {
            'token': `${token}`
        }
    });
    return res.data;
});
  
const apiAdminUser = createSlice({
    name: 'apiAdminUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllUser.pending, (state) => {
            state.statusFetchAllUser = 'loading';
        })
        .addCase(fetchAllUser.fulfilled, (state, action) => {
            if(action.payload.status == "OK") {
                state.statusFetchAllUser = 'succeeded';
                state.listAllUser = action.payload.allUser;
            } 
            if(action.payload.status == "ERR") {
                state.statusFetchAllUser = 'fetch all ticket failed';
            }
        })
        .addCase(fetchAllUser.rejected, (state, action) => {
            state.statusFetchAllUser = 'failed';
        });
    },
});
  
  export default apiAdminUser.reducer;