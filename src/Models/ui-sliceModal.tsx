import { ResumeNavModel } from "./ResumeNavModel";

export type uiSliceModal = {
  ResumeList: ResumeNavModel[];
  UrbanNav: boolean;
  KurbNav: boolean;
  PortfolioNav: boolean;
  Not2SelfNav: boolean;
  FormIsLoading: boolean;
  FormHasError: boolean;
};
