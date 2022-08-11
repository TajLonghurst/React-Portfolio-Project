import React from "react";
import useEmailJs from "../../Hooks/use-emailJs";
import { SendEmailJsModal } from "../../Models/SendEmailJsModal";
import { ModalNotificationsContactMe } from "../Modals/Notifications/ModalNotificationsContactMe";
import { AnimatePresence } from "framer-motion";
import Fields from "./Fields";
import classes from "./Form.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../ReduxStore/Index";

const Form = () => {
  const { sendEmail } = useEmailJs();
  const isLoading = useSelector((state: RootState) => state.ui.FormIsLoading);

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
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isLoading && <ModalNotificationsContactMe />}
      </AnimatePresence>
    </section>
  );
};

export default Form;
