import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  listAllTicket: [],
  statusFetchAllTicket: "idle",
  message: "",
};

export const fetchAllTicket = createAsyncThunk(
  "message/apiAdminTicket",
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
      });
  },
});

export default apiAdminTicket.reducer;
