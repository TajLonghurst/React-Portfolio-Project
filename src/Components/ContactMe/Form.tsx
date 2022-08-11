import React from "react";
import useEmailJs from "../../Hooks/use-emailJs";
import { SendEmailJsModal } from "../../Models/SendEmailJsModal";
import { ModalNotificationsContactMe } from "../Modals/Notifications/ModalNotificationsContactMe";
import Fields from "./Fields";
import classes from "./Form.module.scss";

const Form = () => {
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
      <ModalNotificationsContactMe />
    </section>
  );
};

export default Form;
