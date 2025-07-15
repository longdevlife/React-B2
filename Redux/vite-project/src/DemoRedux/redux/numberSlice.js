import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // giá trị khởi tạo của state
  number: 0,
};

const numberSlice = createSlice({
  name: "numberSlice",
  initialState,
  reducers: {
    //   tạo các action creators từ reducers
    // nơi viết logic để update state
    handleUpNumberAction: (state, action) => {
      state.number = state.number + 1;
    },
    handleDownNumberAction: (state, action) => {
      state.number = state.number - 1;
    },
  },
});

export const { handleUpNumberAction, handleDownNumberAction } =
  numberSlice.actions;

export default numberSlice.reducer;
