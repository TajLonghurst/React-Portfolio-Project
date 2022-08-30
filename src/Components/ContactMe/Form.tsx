import useEmailJs from "../../Hooks/use-emailJs";
import { SendEmailJsModal } from "../../Models/SendEmailJsModal";
import Fields from "./Fields";
import classes from "./Form.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxStore/Index";
// import { AnimatePresence } from "framer-motion";
// import { ModalIsLoadingNotifications } from "../Modals/Notifications/IsLoadingNotifications/ModalIsLoadingNotifications";
// import { ModalErrorNotifications } from "../Modals/Notifications/ErrorNotifications/ModalErrorNotifications";
// import useAnimationTimer from "../../Hooks/use-animationTimer";

const Form = () => {
  const Error = useSelector((state: RootState) => state.ui.FormHasError);
  // const isLoading = useSelector((state: RootState) => state.ui.FormIsLoading);
  // const { isAnimated } = useAnimationTimer(Error, 3000);
  const { sendEmail } = useEmailJs();

  const sendEmailhandler = (formDetails: SendEmailJsModal) => {
    sendEmail({
      firstName: formDetails.firstName,
      lastName: formDetails.lastName,
      email: formDetails.email,
      phoneNumber: formDetails.phoneNumber,
      message: formDetails.message,
    });
  };

  return (
    <section className={classes.container}>
      <Fields sendEmailhandler={sendEmailhandler} />
      {/* <AnimatePresence
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
      </AnimatePresence> */}
    </section>
  );
};

export default Form;
