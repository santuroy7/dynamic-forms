import { createSlice } from "@reduxjs/toolkit";

const dropDownSlice = createSlice({
  name: "dropDownSlice",
  initialState: {
    dropDown: [],
  },
  reducers: {
    addDropDown: (state, action) => {
      state.dropDown = [...state.dropDown, action.payload];
    },
    removeDrop: (state, action) => {
      const new_id = action.payload;
      state.dropDown = state.dropDown.filter((e) => e.id !== new_id);
    },
  },
});
export const { addDropDown, removeDrop } = dropDownSlice.actions;
export default dropDownSlice.reducer;
