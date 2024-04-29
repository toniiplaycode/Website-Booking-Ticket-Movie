import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    selectedSeats: [],
}

const selectedSeats = createSlice({
    name: "selectedSeats",
    initialState,
    reducers: {
        handleSelectedSeats(state, action) {
            if (!state.selectedSeats.includes(action.payload)) {
                // Nếu chưa tồn tại, push giá trị mới vào mảng
                state.selectedSeats.push(action.payload);
            } else {
                // Nếu đã tồn tại, loại bỏ tất cả các phần tử có giá trị là action.payload trong mảng
                state.selectedSeats = state.selectedSeats.filter(item => item !== action.payload);
            }
        },
        handleClearSelectedSeats(state, action) {
            state.selectedSeats = [];
        }
    }
});

export const { handleSelectedSeats, handleClearSelectedSeats } = selectedSeats.actions;

export default selectedSeats.reducer;