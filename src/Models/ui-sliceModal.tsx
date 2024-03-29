import { ResumeNavModel } from "./ResumeNavModel";

export type uiSliceModal = {
  ResumeList: ResumeNavModel[];
  UrbanNav: boolean;
  KurbNav: boolean;
  PortfolioNav: boolean;
  MaritimeRoomNav: boolean;
  FormIsLoading: boolean;
  FormHasError: boolean;
  intialLoading: boolean;
  mobileResumeTitle: string;
  mobileResumeNavTitle: string;
  AirBnb: boolean;
};
