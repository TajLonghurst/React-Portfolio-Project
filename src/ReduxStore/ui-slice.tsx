import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uiSliceModal } from "../Models/ui-sliceModal";
import { ResumeNavItems } from "../Data/ResumeObjectList";

const initialState: uiSliceModal = {
  ResumeList: ResumeNavItems,
  idState: "",
};

const uiSlice = createSlice({
  name: "UI",
  initialState: initialState,
  reducers: {
    ResumeClickHandler(state, actions: PayloadAction<{ id: string }>) {
      state.ResumeList.forEach((rlist) => {
        if (rlist.id === actions.payload.id) {
          rlist.isActive = true;
        }
        if (rlist.id !== actions.payload.id) {
          rlist.isActive = false;
        }
        return;
      });
      console.log(state.ResumeList);
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
