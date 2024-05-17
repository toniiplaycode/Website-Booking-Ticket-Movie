import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  listAllCommentEachFilm: [],
  statusFetchAllCommentEachFilm: "idle",
  statusPostComment: "idle",
  statusPutComment: "idle",
  message: "",
};

export const fetchAllCommentEachFilm = createAsyncThunk(
  "fetchAllCommentEachFilm/apiComment",
  async (id, thunkAPI) => {
    const res = await axios.get(`http://localhost:8000/api/conment/getAllWithFilm?filmId=${id}`);
    return res.data;
  }
);

export const postComment = createAsyncThunk('postComment/apiComment', async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token;  //lấy token bên apiLoginLogout
    const res = await axios.post(`http://localhost:8000/api/conment/addNew`, obj, {
        headers: {
            'token': `${token}`
        }
    });
    thunkAPI.dispatch(fetchAllCommentEachFilm(obj.filmId)); // post xong tự động fetch lại
    if(res.data == "Add successful") {
        toast.success("Bạn đã bình luận !")
    }
    return res.data
});

export const deleteComment = createAsyncThunk('deleteComment/apiComment', async (obj, thunkAPI) => {
  const token = thunkAPI.getState().apiLoginLogout.token;  //lấy token bên apiLoginLogout
  const config = {
      headers: {
        'token': token
      },
      data: obj
    };
  const res = await axios.delete(`http://localhost:8000/api/conment/deleteOBJ`, config);
  thunkAPI.dispatch(fetchAllCommentEachFilm(obj.filmId)); // post xong tự động fetch lại
  if(res.data == "Delete successful") {
      toast.success("Đã xoá bình luận !")
  }
  return res.data
});

export const putComment = createAsyncThunk('putComment/apiComment', async (obj, thunkAPI) => {
  const token = thunkAPI.getState().apiLoginLogout.token;  //lấy token bên apiLoginLogout
  const res = await axios.put(`http://localhost:8000/api/conment/update`, obj, {
      headers: {
          'token': `${token}`
      }
  });
  thunkAPI.dispatch(fetchAllCommentEachFilm(obj.id)); // post xong tự động fetch lại
  if(res.data == "Update successful") {
      toast.success("Bạn đã sửa bình luận !")
  }
  return res.data
});


const apiComment = createSlice({
  name: "apiComment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCommentEachFilm.pending, (state) => {
        state.statusFetchAllCommentEachFilm = "loading";
      })
      .addCase(fetchAllCommentEachFilm.fulfilled, (state, action) => {
          state.statusFetchAllCommentEachFilm = "succeeded";
          state.listAllCommentEachFilm = action.payload.all;
      })
      .addCase(fetchAllCommentEachFilm.rejected, (state, action) => {
        state.statusFetchAllCommentEachFilm = "failed";
      })
      .addCase(postComment.pending, (state) => {
        state.statusPostComment = "loading";
      })
      .addCase(postComment.fulfilled, (state, action) => {
          state.statusPostComment = "succeeded";
      })
      .addCase(postComment.rejected, (state, action) => {
        state.statusPostComment = "failed";
      })
      .addCase(putComment.pending, (state) => {
        state.statusPostComment = "loading";
      })
      .addCase(putComment.fulfilled, (state, action) => {
          state.statusPostComment = "succeeded";
      })
      .addCase(putComment.rejected, (state, action) => {
        state.statusPostComment = "failed";
      });
  },
});

export default apiComment.reducer;
