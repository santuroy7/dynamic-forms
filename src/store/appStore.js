import { configureStore } from "@reduxjs/toolkit";
import textSliceReducer from "./textSlice";
import areaSliceReducer from "./areaSlice";
import dropDownReducer from "./dropDownSlice";
import checkReducer from "./checkSlice";
import radioReducer from "./radioSlice";

const appStore = configureStore({
  reducer: {
    textSlice: textSliceReducer,
    areaSlice: areaSliceReducer,
    dropDownSlice: dropDownReducer,
    checkSlice: checkReducer,
    radioSlice: radioReducer,
  },
});
export default appStore;
