import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from "react-toastify";

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

export const deleteUser = createAsyncThunk('deleteUser/apiAdminUser', async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token;  //lấy token bên apiLoginLogout
    const config = {
        headers: {
          'token': token
        },
        data: obj
      };
    const res = await axios.delete(`http://localhost:8000/api/user/deleteUser`, config);
    thunkAPI.dispatch(fetchAllUser()); // post xong tự động fetch lại
    if(res.data == "Delete user successful ") {
        toast.success("Xoá tài khoản khách hàng thành công !")
    }
    if(res.data.message == "can only be deleted by admin") {
        toast.warning("Chỉ được xoá bởi quản lý !")
    }
    return res.data
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