import { createSlice } from "@reduxjs/toolkit";

const checkSlice = createSlice({
  name: "checkSlice",
  initialState: {
    box: [
      //   {
      //     label: "",
      //     options: [],
      //   },
    ],
  },
  reducers: {
    addCheck: (state, action) => {
      console.log("adding check");
      state.box = [...state.box, action.payload];
      //   state.dropDown = [...state.dropDown, action.payload];
      console.log(state.box);
    },
  },
});

export const { addCheck } = checkSlice.actions;
export default checkSlice.reducer;
