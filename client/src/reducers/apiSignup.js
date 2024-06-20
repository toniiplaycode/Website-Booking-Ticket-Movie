import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { toggleSignin } from './modalSigninSignup';

const initialState = {
    statusPostSignUp: "idle",
    message: "",
};

export const postSignup = createAsyncThunk('message/apiSignup', async (obj, ThunkAPI) => {
    const res = await axios.post(`http://localhost:8000/api/user/createNewUser`, obj);
    if(res.data.status == "OK") {
        toast.success("Đăng ký thành công !");
        ThunkAPI.dispatch(toggleSignin());
    } else if (res.data.status == "ERR") {
        toast.error("Đăng ký thất bại !");
    }
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