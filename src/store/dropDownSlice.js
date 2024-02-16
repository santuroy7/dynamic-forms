import { createSlice } from "@reduxjs/toolkit";

const dropDownSlice = createSlice({
  name: "dropDownSlice",
  initialState: {
    dropDown: [
      //   {
      //     label: "",
      //     options: [],
      //   },
    ],
  },
  reducers: {
    addDropDown: (state, action) => {
      //   state.dropDown.label = action.payload.label;
      //   state.dropDown.options = action.payload.options;
      //   console.log(action.payload.label);
      //   console.log(action.payload.options);
      state.dropDown = [...state.dropDown, action.payload];
      //   console.log(state.dropDown[1].label);
      //   console.log(state.dropDown.options[0]);
      //   console.log(state.dropDown);
    },
    removeDrop: (state, action) => {
      const newlabel = action.payload;
      //   console.log("Dropdown remove", newlabel);
      //   console.log("Dropdown remove", action);
      state.dropDown = state.dropDown.filter((e) => e.label !== newlabel);
    },
  },
});
export const { addDropDown, removeDrop } = dropDownSlice.actions;
export default dropDownSlice.reducer;
