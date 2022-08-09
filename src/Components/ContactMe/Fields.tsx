import React, { FormEvent } from "react";
import { FieldsModel } from "../../Models/FieldsModel";
import Button from "../UI/Button";
import Input from "../UI/Input";
import TextArea from "../UI/TextArea";
import classes from "./Fields.module.scss";

const Fields: React.FC<FieldsModel> = (props) => {
  const onSumbitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log("onSumbitHandler Worked!!");
    props.sendEmailhandler({
      firstName: "Max",
      lastName: "Super",
      email: "Max@gmail.com",
      phoneNumber: 1,
      message: "It Worked Baby",
    });
  };

  return (
    <form onSubmit={onSumbitHandler} className={classes.form}>
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
          <TextArea placeholder="Enter your message" label="Message"></TextArea>
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Fields;
