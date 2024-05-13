import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
    CinemaRoomDetail: {},
    listAllCinemaRoom: [],
    status: 'idle',
    statusAllCinemaRoom: 'idle',
    statusPostCinemaRoom: 'idle',
    error: null,
};

export const fetchCinemaRoomDetail = createAsyncThunk('fetchCinemaRoomDetail/apiCinemaRoom', async (cinemaRoomId) => {
    const res = await axios.get(`http://localhost:8000/api/cinemaRoom/getDetail?id=${cinemaRoomId}`);
    return res.data.data;
});

export const fetchAllCinemaRoom = createAsyncThunk('fetchAllCinemaRoom/apiCinemaRoom', async () => {
    const res = await axios.get(`http://localhost:8000/api/cinemaRoom/getAll`);
    return res.data.all;
});

export const postAddCinemaRoom = createAsyncThunk('postAddCinemaRoom/apiCinemaRoom', async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token;
    const res = await axios.post(`http://localhost:8000/api/cinemaRoom/addNew`, obj, {
        headers: {
        'token': token
        }
    });    
    thunkAPI.dispatch(fetchAllCinemaRoom()); // post xong tự động fetch lại
    if(res.data.message == "create successful") {
        toast.success("Thêm phòng chiếu thành công !");
    }
    if(res.data.message == "cinemaRoom already exist") {
        toast.error("Phòng chiếu đã tồn tại !");
    }
    return res.data;
});

export const deleteCinemaRoom = createAsyncThunk('deleteCinemaRoom/apiCinemaRoom', async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token;  //lấy token bên apiLoginLogout
    const config = {
        headers: {
          'token': token
        },
        data: obj
      };
    const res = await axios.delete(`http://localhost:8000/api/cinemaRoom/deleteOBJ`, config);
    thunkAPI.dispatch(fetchAllCinemaRoom()); // post xong tự động fetch lại
    if(res.data == "Delete successful") {
        toast.success("Xoá phòng chiếu thành công !")
    }
    return res.data
});

export const putUpdateCinemaRoom = createAsyncThunk('putUpdateCinemaRoom/apiCinemaRoom', async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token;
    const res = await axios.put(`http://localhost:8000/api/cinemaRoom/update`, obj, {
        headers: {
        'token': token
        }
    });    
    thunkAPI.dispatch(fetchAllCinemaRoom()); // post xong tự động fetch lại
    if(res.data == "Update successful") {
        toast.success("Sửa phòng chiếu thành công !");
    }
    return res.data;
});
  
const apiCinemaRoom = createSlice({
    name: 'apiCinemaRoom',
    initialState,
    reducers: {
        handleClearSelectedCinemaRoomDetail(state, action) {
            state.CinemaRoomDetail = {};
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCinemaRoomDetail.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCinemaRoomDetail.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.CinemaRoomDetail = action.payload;
        })
        .addCase(fetchCinemaRoomDetail.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(fetchAllCinemaRoom.pending, (state) => {
            state.statusAllCinemaRoom = 'loading';
        })
        .addCase(fetchAllCinemaRoom.fulfilled, (state, action) => {
            state.statusAllCinemaRoom = 'succeeded';
            state.listAllCinemaRoom = action.payload;
        })
        .addCase(fetchAllCinemaRoom.rejected, (state, action) => {
            state.statusAllCinemaRoom = 'failed';
            state.error = action.error.message;
        })
        .addCase(postAddCinemaRoom.pending, (state) => {
            state.statusPostCinemaRoom = 'loading';
        })
        .addCase(postAddCinemaRoom.fulfilled, (state, action) => {
            if(action.payload.message == "cinemaRoom already exist") {
                state.statusPostCinemaRoom = 'failed';
            } 
            if(action.payload.message == "create successful") {
                state.statusPostCinemaRoom = 'succeeded';
            } 
        })
        .addCase(postAddCinemaRoom.rejected, (state, action) => {
            state.statusPostCinemaRoom = 'failed';
            state.error = action.error.message;
        });
},
});

export const { handleClearSelectedCinemaRoomDetail } = apiCinemaRoom.actions;

 export default apiCinemaRoom.reducer;