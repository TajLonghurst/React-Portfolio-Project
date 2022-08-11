import React from "react";
import classes from "./NotificationsContactMe.module.scss";
import SendingEmailIcon from "../../../Assets/Icons/WebIcons/SendingEmailIcon.svg";
import { container } from "../../../Animations/FormNotifications";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../../ReduxStore/Index";

const NotificationsContactMe = () => {
  const formIsLoading = useSelector(
    (state: RootState) => state.ui.FormIsLoading
  );

  const ChangeTextState = !formIsLoading ? "Sent" : "Sending ...";

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.postion}
    >
      <div className={classes.container}>
        <div className={classes.body}>
          <img className={classes.img} src={SendingEmailIcon} alt="" />
          <p className={classes.text}>{ChangeTextState}</p>
        </div>
        <div className={classes.loadingbar}></div>
      </div>
    </motion.div>
  );
};

export default NotificationsContactMe;
