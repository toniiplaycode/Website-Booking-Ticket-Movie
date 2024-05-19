import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  statusBookUserTicket: "idle",
  message: "",
  listTicketEachUser: [],
  statusListTicketEachUser: "idle", 
};

export const postBookUserTicket = createAsyncThunk(
  "postBookUserTicket/apiUserTicket",
  async (obj, thunkAPI) => {
    console.log(obj)
    const token = thunkAPI.getState().apiLoginLogout.token; //lấy token bên apiLoginLogout
    const res = await axios.post(
      `http://localhost:8000/api/ticket/addNew`,
      obj,
      {
        headers: {
          token: `${token}`,
        },
      }
    );
    return res.data;
  }
);

export const fetchListTicketUser = createAsyncThunk(
  "fetchListTicketUser/apiUserTicket",
  async (id, thunkAPI) => {
    const token = thunkAPI.getState().apiLoginLogout.token; //lấy token bên apiLoginLogout
    const res = await axios.get(
      `http://localhost:8000/api/ticket/getDetailWithUser?userId=${id}`,
      {
        headers: {
          token: `${token}`,
        },
      }
    );
    return res.data;
  }
);

const apiUserTicket = createSlice({
  name: "apiUserTicket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postBookUserTicket.pending, (state) => {
        state.statusBookUserTicket = "loading";
      })
      .addCase(postBookUserTicket.fulfilled, (state, action) => {
        if (action.payload.status == "OK") {
          state.statusBookUserTicket = "succeeded";
        }
        if (action.payload.status == "ERR") {
          state.statusBookUserTicket = "book ticket failed";
        }
      })
      .addCase(postBookUserTicket.rejected, (state, action) => {
        state.statusBookUserTicket = "failed";
      })
      .addCase(fetchListTicketUser.pending, (state) => {
        state.statusListTicketEachUser = "loading";
      })
      .addCase(fetchListTicketUser.fulfilled, (state, action) => {
        if (action.payload.status == "OK") {
          state.statusListTicketEachUser = "succeeded";
          state.listTicketEachUser = action.payload.all;
        }
        if (action.payload.status == "ERR") {
          state.statusListTicketEachUser = "fetch ticket user failed";
        }
      })
      .addCase(fetchListTicketUser.rejected, (state, action) => {
        state.statusListTicketEachUser = "failed";
      });
  },
});

export default apiUserTicket.reducer;
