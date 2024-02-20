import { createSlice } from "@reduxjs/toolkit";

const areaSlice = createSlice({
  name: "areaSlice",
  initialState: {
    labels: [],
  },
  reducers: {
    addAreaLabel: (state, action) => {
      state.labels.push(action.payload);
    },
    removeArea: (state, action) => {
      const new_id = action.payload;
      state.labels = state.labels.filter((label) => label.id !== new_id);
    },
  },
});

export const { addAreaLabel, removeArea } = areaSlice.actions;
export default areaSlice.reducer;
