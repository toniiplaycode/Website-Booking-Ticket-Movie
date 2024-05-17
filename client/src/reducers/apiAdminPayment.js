import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  listAllPayment: [],
  statusFetchAllPayment: "idle",
  message: "",
};

export const fetchAllPayment = createAsyncThunk(
  "fetchAllPayment/apiAdminPayment",
  async (_, thunkAPI) => {
    const res = await axios.get(`http://localhost:8000/api/paymentMethod/getAll`);
    return res.data;
  }
);

export const postAddPayment = createAsyncThunk('postAddPayment/apiAdminPayment', async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token;  //lấy token bên apiLoginLogout
    const res = await axios.post(`http://localhost:8000/api/paymentMethod/addNew`, obj, {
        headers: {
            'token': `${token}`
        }
    });
    thunkAPI.dispatch(fetchAllPayment()); // post xong tự động fetch lại
    if(res.data == "Add successful") {
        toast.success("Thêm phương thức thanh toán thành công !")
    }
    return res.data
});

export const deletePayment = createAsyncThunk('deletePayment/apiAdminPayment', async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token;  //lấy token bên apiLoginLogout
    const config = {
        headers: {
          'token': token
        },
        data: obj
      };
    const res = await axios.delete(`http://localhost:8000/api/paymentMethod/deleteOBJ`, config);
    thunkAPI.dispatch(fetchAllPayment()); // post xong tự động fetch lại
    if(res.data == "Delete successful") {
        toast.success("Xoá phương thức thanh toán thành công !")
    }
    return res.data
});

export const putPayment = createAsyncThunk('putPayment/apiAdminPayment', async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token;  //lấy token bên apiLoginLogout
    const res = await axios.put(`http://localhost:8000/api/paymentMethod/update`, obj, {
        headers: {
            'token': `${token}`
        }
    });
    thunkAPI.dispatch(fetchAllPayment()); // post xong tự động fetch lại
    if(res.data == "Update successful") {
        toast.success("Sửa phương thức thanh toán thành công !")
    }
    return res.data
});

const apiAdminPayment = createSlice({
  name: "apiAdminPayment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPayment.pending, (state) => {
        state.statusFetchAllPayment = "loading";
      })
      .addCase(fetchAllPayment.fulfilled, (state, action) => {
          state.statusFetchAllPayment = "succeeded";
          state.listAllPayment = action.payload.all;
      })
      .addCase(fetchAllPayment.rejected, (state, action) => {
        state.statusFetchAllPayment = "failed";
      })
  },
});

export default apiAdminPayment.reducer;
