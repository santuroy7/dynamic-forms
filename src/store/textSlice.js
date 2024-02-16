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
      // console.log(new_id);
      // console.log(action);
      state.labels = state.labels.filter((label) => label.id !== new_id);
    },
    // remove: (state, action) => {},
  },
});

export const { addText, removeText } = textSlice.actions;
export default textSlice.reducer;
