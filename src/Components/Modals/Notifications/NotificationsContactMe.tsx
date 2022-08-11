import React from "react";
import classes from "./NotificationsContactMe.module.scss";
import SendingEmailIcon from "../../../Assets/Icons/WebIcons/SendingEmailIcon.svg";

const NotificationsContactMe = () => {
  return (
    <div className={classes.postion}>
      <div className={classes.container}>
        <div className={classes.body}>
          <img className={classes.img} src={SendingEmailIcon} alt="" />
          <p className={classes.text}>Sending ...</p>
        </div>
        <div className={classes.loadingbar}></div>
      </div>
    </div>
  );
};

export default NotificationsContactMe;
