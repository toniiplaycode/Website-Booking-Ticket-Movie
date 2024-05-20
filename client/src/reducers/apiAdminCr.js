import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
    listAllCr: [],
    statuslistAllCr: 'idle',
    statusPostAddCr: 'idle',
    error: null,
};

export const fetchAllCr = createAsyncThunk('fetchAllCr/apiAdminCr', async (filmId) => {
    const res = await axios.get(`http://localhost:8000/api/calendarRelease/getAll`);
    return res.data.all;
});

export const postAddCr = createAsyncThunk('postAddCr/apiAdminCr', async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token;  //lấy token bên apiLoginLogout
    const res = await axios.post(`http://localhost:8000/api/calendarRelease/addNew`, obj, {
        headers: {
            'token': `${token}`
        }
    });
    thunkAPI.dispatch(fetchAllCr()); // post xong tự động fetch lại
    if(res.data.message == "Create successful") {
        toast.success("Thêm suất chiếu thành công !")
    }
    if(res.data.message == "Time selection error") {
        toast.error("Thời gian chưa hợp lệ !")
    }
    if(res.data.message == "releaseDate error") {
        toast.error("Không được chọn ngày ở quá khứ !")
    }
    return res.data
});

export const deleteCr = createAsyncThunk('deleteCr/apiAdminCr', async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token;  //lấy token bên apiLoginLogout
    const config = {
        headers: {
          'token': token
        },
        data: obj
      };
    const res = await axios.delete(`http://localhost:8000/api/calendarRelease/deleteOBJ`, config);
    thunkAPI.dispatch(fetchAllCr()); // post xong tự động fetch lại
    if(res.data == "Delete successful") {
        toast.success("Xoá suất chiếu thành công !")
    }
    return res.data
});
  
const apiAdminCr = createSlice({
    name: 'apiAdminCr',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllCr.pending, (state) => {
            state.statuslistAllCr = 'loading';
        })
        .addCase(fetchAllCr.fulfilled, (state, action) => {
            state.statuslistAllCr = 'succeeded';
            state.listAllCr = action.payload;
        })
        .addCase(fetchAllCr.rejected, (state, action) => {
            state.statuslistAllCr = 'failed';
            state.error = action.error.message;
        })
        .addCase(postAddCr.pending, (state) => {
            state.statusPostAddCr = 'loading';
        })
        .addCase(postAddCr.fulfilled, (state, action) => {
            if(action.payload.message == "Create successful") {
                state.statusPostAddCr = 'succeeded';
            }
            if(action.payload.message == "Time selection error") {
                state.statusPostAddCr = 'failed';
            }
        })
        .addCase(postAddCr.rejected, (state, action) => {
            state.statusPostAddCr = 'failed';
            state.error = action.error.message;
        });
},
});
  
  export default apiAdminCr.reducer;