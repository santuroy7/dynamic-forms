import { createSlice } from "@reduxjs/toolkit";

const radioSlice = createSlice({
  name: "radioSlice",
  initialState: {
    radio: [],
  },
  reducers: {
    addRadio: (state, action) => {
      state.radio = [...state.radio, action.payload];
    },
    removeRadio: (state, action) => {
      const new_id = action.payload;
      state.radio = state.radio.filter((e) => e.id !== new_id);
    },
  },
});
export const { addRadio, removeRadio } = radioSlice.actions;
export default radioSlice.reducer;
