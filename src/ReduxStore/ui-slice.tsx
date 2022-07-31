import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uiSliceModal } from "../Models/ui-sliceModal";
import { ResumeNavItems } from "../Data/ResumeObjectList";

const initialState: uiSliceModal = {
  ResumeList: ResumeNavItems,
  ProjectMobileIsActive: false,
  UrbanNav: true,
  KurbNav: false,
  PortfolioNav: false,
  Not2SelfNav: false,
};

const uiSlice = createSlice({
  name: "UI",
  initialState: initialState,
  reducers: {
    ResumeClickHandler(state, actions: PayloadAction<{ id: string }>) {
      const resume = actions.payload;
      state.ResumeList.forEach((rlist) => {
        if (rlist.id === resume.id) {
          rlist.isActive = true;
        }
        if (rlist.id !== resume.id) {
          rlist.isActive = false;
        }
        return;
      });
    },
    ProjectMobileView(state, actions: PayloadAction<{ isActive: boolean }>) {
      state.ProjectMobileIsActive = actions.payload.isActive;
      if (state.ProjectMobileIsActive) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    },
    ProjectsClickHandler(state, actions: PayloadAction<{ name: string }>) {
      if (actions.payload.name === "URBAN") {
        state.UrbanNav = true;
        state.KurbNav = false;
        state.Not2SelfNav = false;
        state.PortfolioNav = false;
      }
      if (actions.payload.name === "KURB") {
        state.UrbanNav = false;
        state.KurbNav = true;
        state.Not2SelfNav = false;
        state.PortfolioNav = false;
      }
      if (actions.payload.name === "NOTE2SELF") {
        state.UrbanNav = false;
        state.KurbNav = false;
        state.Not2SelfNav = true;
        state.PortfolioNav = false;
      }
      if (actions.payload.name === "PORTFOLIO") {
        state.UrbanNav = false;
        state.KurbNav = false;
        state.Not2SelfNav = false;
        state.PortfolioNav = true;
      }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
