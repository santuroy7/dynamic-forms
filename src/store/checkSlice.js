import { createSlice } from "@reduxjs/toolkit";

const checkSlice = createSlice({
  name: "checkSlice",
  initialState: {
    box: [],
  },
  reducers: {
    addCheck: (state, action) => {
      console.log("adding check");
      state.box = [...state.box, action.payload];
      console.log(state.box);
    },
    removeCheck: (state, action) => {
      const new_id = action.payload;
      state.box = state.box.filter((e) => e.id !== new_id);
    },
  },
});

export const { addCheck, removeCheck } = checkSlice.actions;
export default checkSlice.reducer;
