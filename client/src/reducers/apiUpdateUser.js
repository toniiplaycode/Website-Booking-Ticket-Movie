import { createSlice, createAsyncThunk, isFluxStandardAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchInforUser } from './apiLoginLogout';
import { toast } from 'react-toastify';

const initialState = {
    statusUpdateUser: "idle",
    message: "",
};

export const putUpdateUser = createAsyncThunk('message/apiUpdateUser', async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token;  //lấy token bên apiLoginLogout
    const res = await axios.put(`http://localhost:8000/api/user/updateUser`, obj, {
        headers: {
            'token': `${token}`
        }
    });
    thunkAPI.dispatch(fetchInforUser(obj.id)); // post xong tự động fetch lại
    if(res.data == "Update user successful") {
      toast.success("Đã thay đổi thông tin !");
    }
    return res.data;
});
  
const apiUpdateUser = createSlice({
    name: 'apiUpdateUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(putUpdateUser.pending, (state) => {
            state.statusUpdateUser = 'loading';
        })
        .addCase(putUpdateUser.fulfilled, (state, action) => {
            if(action.payload == "Update user successful ") {
                state.statusUpdateUser = 'succeeded';
            } 
            if(action.payload.status == "ERR") {
                state.statusUpdateUser = 'update user failed';
            }
        })
        .addCase(putUpdateUser.rejected, (state, action) => {
            state.statusUpdateUser = 'failed';
        });
    },
});
  
  export default apiUpdateUser.reducer;