import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
  name: "textSlice",
  initialState: {
    labels: [],
  },
  reducers: {
    addText: (state, action) => {
      state.labels.push(action.payload);
    },
    removeText: (state, action) => {
      const new_id = action.payload;
      state.labels = state.labels.filter((label) => label.id !== new_id);
    },
  },
});

export const { addText, removeText } = textSlice.actions;
export default textSlice.reducer;
