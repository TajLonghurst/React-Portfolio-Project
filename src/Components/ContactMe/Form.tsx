import React from "react";
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";
import classes from "./Form.module.scss";

const Form = () => {
  return (
    <section className={classes.container}>
      <div className={classes.form}>
        <div className={classes.row}>
          <div className={classes.col}>
            <Input
              type="text"
              placeholder="Enter your first name"
              label="First Name"
            />
          </div>
          <div className={classes.col}>
            <Input
              type="text"
              placeholder="Enter your last name"
              label="Last Name"
            />
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>
            <Input type="email" placeholder="Enter your email" label="Email" />
          </div>
          <div className={classes.col}>
            <Input
              type="tel"
              placeholder="Enter your phone number"
              label="Phone Number"
            />
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>
            <TextArea
              placeholder="Enter your message"
              label="Message"
            ></TextArea>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
