import { createSlice } from "@reduxjs/toolkit";

const areaSlice = createSlice({
  name: "areaSlice",
  initialState: {
    label: [],
  },
  reducers: {
    addAreaLabel: (state, action) => {
      state.label.push(action.payload);
    },
    removeArea: (state, action) => {
      const newlabel = action.payload;
      // console.log(newlabel);
      // console.log(action);
      state.label = state.label.filter((label) => label !== newlabel);
    },
  },
});

export const { addAreaLabel, removeArea } = areaSlice.actions;
export default areaSlice.reducer;
