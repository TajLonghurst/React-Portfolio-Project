import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import NotificationsContactMe from "./IsLoadingNotifications";

const portalIsLoadingNotifications = document.getElementById(
  "Notifications"
) as HTMLElement;

export const ModalIsLoadingNotifications = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <NotificationsContactMe />,
        portalIsLoadingNotifications
      )}
    </Fragment>
  );
};
