import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import ErrorNotifications from "./ErrorNotifications";

const portalErrorNotifications = document.getElementById(
  "Notifications"
) as HTMLElement;

export const ModalErrorNotifications = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<ErrorNotifications />, portalErrorNotifications)}
    </Fragment>
  );
};
