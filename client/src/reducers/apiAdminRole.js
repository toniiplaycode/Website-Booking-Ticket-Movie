import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
    listAllRoles: [],
    statusAllRole: 'idle',
    error: null,
};

export const fetchAllRole = createAsyncThunk('fetchAllRole/apiAminRole', async (_, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token; //lấy token bên apiLoginLogout
    const res = await axios.get(`http://localhost:8000/api/role/getAll`, 
    {
      headers: {
        token: `${token}`,
      },
    });
    return res.data.all;
});

export const putRole = createAsyncThunk('putRole/apiAminRole', async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token; //lấy token bên apiLoginLogout
    const res = await axios.put(`http://localhost:8000/api/user/updateRole`, obj,
    {
      headers: {
        token: `${token}`,
      },
    });
    thunkAPI.dispatch(fetchAllRole());
    if(res.data == "Update Role successful") {
      toast.success("Cập nhật chức vụ thành công !");
    }
});
  
const apiAminRole = createSlice({
    name: 'apiAminRole',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllRole.pending, (state) => {
            state.statusAllRole= 'loading';
        })
        .addCase(fetchAllRole.fulfilled, (state, action) => {
            state.statusAllRole= 'succeeded';
            state.listAllRoles = action.payload;
        })
        .addCase(fetchAllRole.rejected, (state, action) => {
            state.statusAllRole= 'failed';
            state.error = action.error.message;
        });
},
});
  
  export default apiAminRole.reducer;