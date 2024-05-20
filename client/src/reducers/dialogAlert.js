import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    showDialog: false,
    confirm: false,
    message: "",
}

const dialogAlert = createSlice({
    name: "dialogAlert",
    initialState,
    reducers: {
        showDialog(state, action) {
            state.showDialog = true;
            state.message = action.payload;
        },
        hiddenDialog(state) {
            state.showDialog = false;
        },
        confirmDialog(state, action) {
            state.confirm = action;
        },
    }
});

export const { showDialog, hiddenDialog, confirmDialog } = dialogAlert.actions;

export default dialogAlert.reducer;