import { createSlice } from "@reduxjs/toolkit";

const radioSlice = createSlice({
  name: "radioSlice",
  initialState: {
    radio: [
      //   {
      //     label: "",
      //     options: [],
      //   },
    ],
  },
  reducers: {
    addRadio: (state, action) => {
      //   state.dropDown.label = action.payload.label;
      //   state.dropDown.options = action.payload.options;
      //   console.log(action.payload.label);
      //   console.log(action.payload.options);
      state.radio = [...state.radio, action.payload];
      //   console.log(state.dropDown[1].label);
      //   console.log(state.dropDown.options[0]);
      //   console.log(state.dropDown);
    },
    removeRadio: (state, action) => {
      const new_id = action.payload;
      //   console.log("Dropdown remove", newlabel);
      //   console.log("Dropdown remove", action);
      state.radio = state.radio.filter((e) => e.id !== new_id);
    },
  },
});
export const { addRadio, removeRadio } = radioSlice.actions;
export default radioSlice.reducer;
