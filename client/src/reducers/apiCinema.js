import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
    CinemaDetail: {},
    listAllCinema: [],
    status: 'idle',
    statusListAllCinema: 'idle',
    statusPostAddCinema: 'idle',
    statusPutUpdateCinema: 'idle',
    error: null,
};

export const fetchCinemaDetail = createAsyncThunk('cinemaDetail/apiCinema', async (cinemaId) => {
    const res = await axios.get(`http://localhost:8000/api/cinema/getDetail?id=${cinemaId}`);
    return res.data.data;
});

export const fetchAllCinema = createAsyncThunk('fetchAllCinema/apiCinema', async () => {
    const res = await axios.get(`http://localhost:8000/api/cinema/getAll`);
    return res.data.all;
});

export const postAddCinema = createAsyncThunk('postAddCinema/apiCinema', async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token;
      const res = await axios.post(`http://localhost:8000/api/cinema/addNew`, obj, {
        headers: {
          'token': token
        }
      });    
      thunkAPI.dispatch(fetchAllCinema()); // post xong tự đ ộng fetch lại
      if(res.data.message == "create successful") {
        toast.success("Thêm rạp thành công !");
      }
      if(res.data.message == "cinema already exist") {
        toast.error("Rạp đã tồn tại !");
      }
    return res.data;
  });

export const deleteCinema = createAsyncThunk('deleteCinema/apiCinema', async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token;  //lấy token bên apiLoginLogout
    const config = {
        headers: {
          'token': token
        },
        data: obj
      };
    const res = await axios.delete(`http://localhost:8000/api/cinema/deleteOBJ`, config);
    thunkAPI.dispatch(fetchAllCinema()); // post xong tự động fetch lại
    if(res.data == "Delete a successful Cinema") {
        toast.success("Xoá rạp thành công !")
    }
    return res.data
});

export const updateCinema = createAsyncThunk('updateCinema/apiCinema', async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token;
      const res = await axios.put(`http://localhost:8000/api/cinema/update`, obj, {
        headers: {
          'token': token
        }
      });    
      toast.success("Sửa thể loại thành công !");
      thunkAPI.dispatch(fetchAllCinema()); // post xong tự động fetch lại
      return res.data;
  });
  
const apiCinema = createSlice({
    name: 'apiCinema',
    initialState,
    reducers: {
        handleClearSelectedCinemaDetail(state, action) {
            state.CinemaDetail = {};
        },
    },
    extraReducers: (builder) => { 
        builder
        .addCase(fetchCinemaDetail.pending, (state) =>{
            state.status = 'loading';
        })
        .addCase(fetchCinemaDetail.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.CinemaDetail = action.payload;
        })
        .addCase(fetchCinemaDetail.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(fetchAllCinema.pending, (state) =>{
            state.statusListAllCinema = 'loading';
        })
        .addCase(fetchAllCinema.fulfilled, (state, action) => {
            state.statusListAllCinema = 'succeeded';
            state.listAllCinema = action.payload;
        })
        .addCase(fetchAllCinema.rejected, (state, action) => {
            state.statusListAllCinema = 'failed';
            state.error = action.error.message;
        })
        .addCase(postAddCinema.pending, (state) =>{
            state.statusPostAddCinema = 'loading';
        })
        .addCase(postAddCinema.fulfilled, (state, action) => {
            if(action.payload.message == "create successful") {
                state.statusPostAddCinema = 'succeeded';
            }
        })
        .addCase(postAddCinema.rejected, (state, action) => {
            state.statusPostAddCinema = 'failed';
            state.error = action.error.message;
        })
        .addCase(updateCinema.pending, (state) =>{
            state.statusPutUpdateCinema = 'loading';
        })
        .addCase(updateCinema.fulfilled, (state, action) => {
            state.statusPutUpdateCinema = 'succeeded';
        })
        .addCase(updateCinema.rejected, (state, action) => {
            state.statusPutUpdateCinema = 'failed';
            state.error = action.error.message;
        });
},
});

export const { handleClearSelectedCinemaDetail } = apiCinema.actions;

export default apiCinema.reducer; 