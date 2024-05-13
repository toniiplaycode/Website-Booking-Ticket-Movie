import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  listAllTicket: [],
  statusFetchAllTicket: "idle",
  statusApproveTicket: "idle",
  message: "",
};

export const fetchAllTicket = createAsyncThunk(
  "fetchAllTicket/apiAdminTicket",
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token; //lấy token bên apiLoginLogout
    const res = await axios.get(`http://localhost:8000/api/ticket/getAll`, {
      headers: {
        token: `${token}`,
      },
    });
    return res.data;
  }
);

export const approveTicket = createAsyncThunk(
  "approveTicket/apiAdminTicket",
  async (obj, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token; //lấy token bên apiLoginLogout
    const res = await axios.put(`http://localhost:8000/api/ticket/updateStatus`, obj, {
      headers: {
        token: `${token}`,
      },
    });
    thunkAPI.dispatch(fetchAllTicket()); // post xong tự động fetch lại
    if(res.data.message == "Update successful") {
      toast.success("Duyệt vé thành công !");
    }
    return res.data;
  }
);

const apiAdminTicket = createSlice({
  name: "apiAdminTicket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTicket.pending, (state) => {
        state.statusFetchAllTicket = "loading";
      })
      .addCase(fetchAllTicket.fulfilled, (state, action) => {
        if (action.payload.status == "OK") {
          state.statusFetchAllTicket = "succeeded";
          state.listAllTicket = action.payload.all;
        }
        if (action.payload.status == "ERR") {
          state.statusFetchAllTicket = "fetch all ticket failed";
        }
      })
      .addCase(fetchAllTicket.rejected, (state, action) => {
        state.statusFetchAllTicket = "failed";
      })
      .addCase(approveTicket.pending, (state) => {
        state.statusApproveTicket = "loading";
      })
      .addCase(approveTicket.fulfilled, (state, action) => {
          state.statusApproveTicket = "succeeded";
      })
      .addCase(approveTicket.rejected, (state, action) => {
        state.statusApproveTicket = "failed";
      });
  },
});

export default apiAdminTicket.reducer;
