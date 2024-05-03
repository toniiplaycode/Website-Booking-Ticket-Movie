import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    statusPostSignUp: "idle",
    message: "",
};

export const postSignup = createAsyncThunk('message/apiSignup', async (obj) => {
    const res = await axios.post(`http://localhost:8000/api/user/createNewUser`, obj);
    return res.data;
});
  
const apiSignup = createSlice({
    name: 'apiSignup',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(postSignup.pending, (state) => {
            state.statusPostSignUp = 'loading';
        })
        .addCase(postSignup.fulfilled, (state, action) => {
            state.message = action.payload.message;
            if(action.payload.status == "OK") {
                state.statusPostSignUp = 'succeeded';
            } 
            if(action.payload.status == "ERR") {
                state.statusPostSignUp = 'signup failed';
            }
        })
        .addCase(postSignup.rejected, (state, action) => {
            state.statusPostSignUp = 'failed';
        });
    },
});
  
  export default apiSignup.reducer;