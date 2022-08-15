import classes from "./IsLoadingNotifications.module.scss";
import SendingEmailIcon from "../../../../Assets/Icons/WebIcons/SendingEmailIcon.svg";
import DoneIcon from "../../../../Assets/Icons/WebIcons/DoneIcon.svg";
import { container } from "../../../../Animations/FormNotifications";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../../../../ReduxStore/Index";
import { img } from "../../../../Animations/FormNotifications";
import {
  textSending,
  textSent,
} from "../../../../Animations/FormNotifications";

const NotificationsContactMe = () => {
  const formIsLoading = useSelector(
    (state: RootState) => state.ui.FormIsLoading
  );

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
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {!formIsLoading && (
              <motion.img
                variants={textSent}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={classes.donticon}
                src={DoneIcon}
                alt=""
              />
            )}
          </AnimatePresence>
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {formIsLoading && (
              <motion.img
                variants={img}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={classes.img}
                src={SendingEmailIcon}
                alt=""
              />
            )}
          </AnimatePresence>
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {!formIsLoading && (
              <motion.p
                variants={textSent}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={classes.text}
              >
                Sent
              </motion.p>
            )}
          </AnimatePresence>
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
            {formIsLoading && (
              <motion.p
                variants={textSending}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={classes.text}
              >
                Sending ...
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div className={classes.loadingbar}></div>
      </motion.div>
    </div>
  );
};

export default NotificationsContactMe;
