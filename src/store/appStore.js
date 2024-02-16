import { configureStore } from "@reduxjs/toolkit";
// import { delay } from "@reduxjs/toolkit/dist/utils";
import textSliceReducer from "./textSlice";
import areaSliceReducer from "./areaSlice";
import dropDownReducer from "./dropDownSlice";
import checkReducer from "./checkSlice";

const appStore = configureStore({
  reducer: {
    textSlice: textSliceReducer,
    areaSlice: areaSliceReducer,
    dropDownSlice: dropDownReducer,
    checkSlice: checkReducer,
  },
});
export default appStore;
