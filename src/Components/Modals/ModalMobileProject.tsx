import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import ProjectsMobileModal from "./ProjectsMobileModal";

const portalMobileProjectsView = document.getElementById(
  "MobileProjectsView"
) as HTMLElement;

export const ModalMobileProject = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<ProjectsMobileModal />, portalMobileProjectsView)}
    </Fragment>
  );
};
