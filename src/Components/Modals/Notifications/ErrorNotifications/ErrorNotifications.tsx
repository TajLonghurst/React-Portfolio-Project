import React from "react";
import classes from "./ErrorNotifications.module.scss";
import FailedIcon from "../../../../Assets/Icons/WebIcons/FailedIcon.svg";
import { motion } from "framer-motion";
import { container } from "../../../../Animations/FormNotifications";

const ErrorNotifications = () => {
  return (
    <div className={classes.postion}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={classes.container}
      >
        <div className={classes.body}>
          <img className={classes.img} src={FailedIcon} alt="" />
          {/* <img className={classes.img} src={SendingEmailIcon} alt="" /> */}
          <p className={classes.text}>Failed to Send</p>
        </div>
        <div className={classes.loadingbar}></div>
      </motion.div>
    </div>
  );
};

export default ErrorNotifications;
