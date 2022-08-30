import React, { Fragment } from "react";
import { ModalIsLoadingNotifications } from "../../Modals/Notifications/IsLoadingNotifications/ModalIsLoadingNotifications";
import { ModalErrorNotifications } from "../../Modals/Notifications/ErrorNotifications/ModalErrorNotifications";
import useAnimationTimer from "../../../Hooks/use-animationTimer";
import { RootState } from "../../../ReduxStore/Index";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

const NotificationsIndex = () => {
  const isLoading = useSelector((state: RootState) => state.ui.FormIsLoading);
  const Error = useSelector((state: RootState) => state.ui.FormHasError);
  const { isAnimated } = useAnimationTimer(Error, 3000);
  return (
    <Fragment>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isAnimated && <ModalErrorNotifications />}
      </AnimatePresence>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {!Error && isLoading && <ModalIsLoadingNotifications />}
      </AnimatePresence>
    </Fragment>
  );
};

export default NotificationsIndex;
