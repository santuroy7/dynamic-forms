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
    removeCheck: (state, action) => {
      const new_id = action.payload;
      //   console.log("Dropdown remove", newlabel);
      //   console.log("Dropdown remove", action);
      state.box = state.box.filter((e) => e.id !== new_id);
    },
  },
});

export const { addCheck, removeCheck } = checkSlice.actions;
export default checkSlice.reducer;
