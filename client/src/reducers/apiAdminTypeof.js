import { createSlice, createAsyncThunk, isFluxStandardAction } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  listTypeof: [],
  statusFetchAllTypeof: "idle",
  message: "",
};

export const fetchAllTypeof = createAsyncThunk(
  "fetchAllTypeof/apiAdminTypeof",
  async () => {
    const res = await axios.get(`http://localhost:8000/api/typeFilm/getAll`);
    return res.data;
  }
);

export const postTypeof = createAsyncThunk('postTypeof/apiAdminTypeof', async (obj, thunkAPI) => {
  const token = thunkAPI.getState().apiLoginLogout.token;
    const res = await axios.post(`http://localhost:8000/api/typeFilm/addNew`, obj, {
      headers: {
        'token': token
      }
    });    
    thunkAPI.dispatch(fetchAllTypeof()); // post xong tự động fetch lại
    if(res.data.message == "create successful") {
      toast.success("Thêm thể loại thành công !");
    }
    if(res.data.message == "nameTypeFilm already exist") {
      toast.error("Thể loại đã tồn tại !");
    }
  
    return res.data;
});

export const deleteTypeof = createAsyncThunk('deleteTypeof/apiAdminTypeof', async (obj, thunkAPI) => {
  const token = thunkAPI.getState().apiLoginLogout.token;
  const config = {
    headers: {
      'token': token
    },
    data: obj
  };
  const res = await axios.delete(`http://localhost:8000/api/typeFilm/deleteOBJ`, config);
  toast.success("Xoá thể loại thành công !");
  thunkAPI.dispatch(fetchAllTypeof()); // post xong tự động fetch lại
  return res.data;
});

export const updateTypeof = createAsyncThunk('updateTypeof/apiAdminTypeof', async (obj, thunkAPI) => {
  const token = thunkAPI.getState().apiLoginLogout.token;
  try {
    const res = await axios.put(`http://localhost:8000/api/typeFilm/update`, obj, {
      headers: {
        'token': token
      }
    });    
    toast.success("Sửa thể loại thành công !");
    thunkAPI.dispatch(fetchAllTypeof()); // post xong tự động fetch lại
    return res.data;
  } catch (error) {

  }
});

const apiAdminTypeof = createSlice({
  name: "apiAdminTypeof",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTypeof.pending, (state) => {
        state.statusFetchAllTypeof = "loading";
      })
      .addCase(fetchAllTypeof.fulfilled, (state, action) => {
        if (action.payload.status == "OK") {
          state.statusFetchAllTypeof = "succeeded";
          state.listTypeof = action.payload.all;
        }
        if (action.payload.status == "ERR") {
          state.statusFetchAllTypeof = "fetch all ticket failed";
        }
      })
  },
});

export default apiAdminTypeof.reducer;
