import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import NotificationsContactMe from "./NotificationsContactMe";

const portalNotificationsContactMeView = document.getElementById(
  "NotificationsContactMeView"
) as HTMLElement;

export const ModalNotificationsContactMe = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <NotificationsContactMe />,
        portalNotificationsContactMeView
      )}
    </Fragment>
  );
};
