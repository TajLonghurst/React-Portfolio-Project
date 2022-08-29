import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cursorSliceModal } from "../Models/cursor-sliceModal";

const initialState: cursorSliceModal = {
  varaintType: "default",
};

const cursorSlice = createSlice({
  name: "CURSOR",
  initialState: initialState,
  reducers: {
    onButtonHover(state, actions: PayloadAction<{ hoverType: string }>) {
      state.varaintType = actions.payload.hoverType;
    },
  },
});

export const cursorActions = cursorSlice.actions;

export default cursorSlice;
