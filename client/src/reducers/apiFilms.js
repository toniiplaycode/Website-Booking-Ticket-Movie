import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
    films: [],
    statusPost: 'idle',
    statusDelete: 'idle',
    statusPut: 'idle',
    status: 'idle',
    error: null,
};

export const fetchFilms = createAsyncThunk('films/fetchFilms', async () => {
    const response = await axios.get('http://localhost:8000/api/film/getAll');
    return response.data;
});

export const postFilms = createAsyncThunk('films/postFilms', async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token; //lấy token bên apiLoginLogout
    const response = await axios.post("http://localhost:8000/api/film/addNew",
    obj,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        token: token,
      },
    });
    thunkAPI.dispatch(fetchFilms()); // post xong tự động fetch lại
    if(response.data.response.message == "create successful ") {
        toast.success("Thêm phim thành công !");
    }
    if(response.data.response.message == "releaseDate error") {
        toast.warning("Chọn ngày không hợp lệ ! ");
    }
    if(response.data.response.message == "nameFilm already exist") {
        toast.warning("Không được trùng tên phim đã có !");
    }
    return response.data;
});


export const deleteFilms = createAsyncThunk('films/deleteFilms', async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token;
    const config = {
      headers: {
        'token': token
      },
      data: obj
    };
    const res = await axios.delete(`http://localhost:8000/api/film/deleteOBJ`, config);
    thunkAPI.dispatch(fetchFilms()); // tự động fetch lại
    toast.success("Xoá phim thành công !");
    return res.data;
  });

export const putFilms = createAsyncThunk('films/putFilms', async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token; //lấy token bên apiLoginLogout
    const response = await axios.post("http://localhost:8000/api/film/update",
    obj,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        token: token,
      },
    });
    thunkAPI.dispatch(fetchFilms()); // post xong tự động fetch lại
    if(response.data.message == "Update a successful Film") {
        toast.success("Sửa phim thành công !");
    }
    return response.data;
});
  
  
const apiFilms = createSlice({
    name: 'films',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchFilms.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchFilms.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.films = action.payload;
        })
        .addCase(fetchFilms.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        .addCase(postFilms.pending, (state) => {
            state.statusPost = 'loading';
        })
        .addCase(postFilms.fulfilled, (state, action) => {
            if(action.payload.response.message == "create successful ") {
                state.statusPost = 'succeeded';
            } 
        })
        .addCase(postFilms.rejected, (state, action) => {
            state.statusPost = 'failed';
            state.error = action.error.message;
        })
        .addCase(deleteFilms.pending, (state) => {
            state.statusDelete = 'loading';
        })
        .addCase(deleteFilms.fulfilled, (state, action) => {
            state.statusDelete = 'succeeded';
        })
        .addCase(deleteFilms.rejected, (state, action) => {
            state.statusDelete = 'failed';
            state.error = action.error.message;
        })
        .addCase(putFilms.pending, (state) => {
            state.statusPut = 'loading';
        })
        .addCase(putFilms.fulfilled, (state, action) => {
            if(action.payload.message == "Update a successful Film") {
                state.statusPut = 'succeeded';
            }
        })
        .addCase(putFilms.rejected, (state, action) => {
            state.statusPut = 'failed';
            state.error = action.error.message;
        });
},
});
  
  export default apiFilms.reducer;