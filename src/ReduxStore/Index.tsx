import { configureStore } from "@reduxjs/toolkit";
import cursorSlice from "./cursor-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cursor: cursorSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
