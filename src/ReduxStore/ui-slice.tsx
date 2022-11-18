import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uiSliceModal } from "../Models/ui-sliceModal";
import { ResumeNavItems } from "../Data/ResumeObjectList";

const initialState: uiSliceModal = {
  ResumeList: ResumeNavItems,
  UrbanNav: true,
  KurbNav: false,
  PortfolioNav: false,
  Not2SelfNav: false,
  FormIsLoading: false,
  FormHasError: false,
  intialLoading: true,
  mobileResumeTitle: "",
  mobileResumeNavTitle: "",
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
    FormLoading(state, actions: PayloadAction<{ isLoading: boolean }>) {
      state.FormIsLoading = actions.payload.isLoading;
    },
    FormError(state, actions: PayloadAction<{ error: boolean }>) {
      state.FormHasError = actions.payload.error;
    },
    intialLoading(state) {
      state.intialLoading = false;
    },
    mobliePageTitle(state, actions: PayloadAction<{ title: string }>) {
      state.mobileResumeTitle = actions.payload.title;
    },
    mobileResumeNavTitle(state) {
      if (state.mobileResumeTitle === "Resume") {
        for (let x = 0; x < state.ResumeList.length; x++) {
          if (state.ResumeList[x].isActive === true) {
            state.mobileResumeNavTitle = state.ResumeList[x].label;
          }
        }
      }
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
