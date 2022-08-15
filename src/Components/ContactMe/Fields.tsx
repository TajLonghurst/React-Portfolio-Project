import React, { FormEvent } from "react";
import useInput from "../../Hooks/use-input";
import { FieldsModel } from "../../Models/FieldsModel";
import Button from "../UI/Buttons/Button";
import Input from "../UI/Inputs/Input";
import TextArea from "../UI/Inputs/TextArea";
import classes from "./Fields.module.scss";

const Fields: React.FC<FieldsModel> = (props) => {
  const {
    value: nameEntredValue,
    isValid: nameValueIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: nameResetInput,
  } = useInput("firstName");

  const {
    value: lastEntredValue,
    isValid: lastValueIsValid,
    hasError: lastHasError,
    valueChangeHandler: lastChangeHandler,
    inputBlurHandler: lastBlurHandler,
    resetInput: lastResetInput,
  } = useInput("lastName");

  const {
    value: emailEntredValue,
    isValid: emailValueIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: emailResetInput,
  } = useInput("email");

  const {
    value: phoneEntredValue,
    isValid: phoneValueIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    resetInput: phoneResetInput,
  } = useInput("phoneNumber");

  const {
    value: messageEntredValue,
    isValid: messageValueIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    resetInput: messageResetInput,
  } = useInput("message");

  const onSumbitHandler = (event: FormEvent) => {
    event.preventDefault();

    let formIsValid = false;

    if (
      nameValueIsValid &&
      lastValueIsValid &&
      emailValueIsValid &&
      phoneValueIsValid &&
      messageValueIsValid
    ) {
      formIsValid = true;
    }

    if (!formIsValid) {
      return;
    }

    props.sendEmailhandler({
      firstName: nameEntredValue,
      lastName: lastEntredValue,
      email: emailEntredValue,
      phoneNumber: phoneEntredValue,
      message: messageEntredValue,
    });

    nameResetInput();
    lastResetInput();
    emailResetInput();
    phoneResetInput();
    messageResetInput();
  };

  return (
    <form onSubmit={onSumbitHandler} className={classes.form}>
      <div className={classes.row}>
        <div className={classes.col}>
          <Input
            type="text"
            placeholder="Enter your first name"
            label="First Name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={nameEntredValue}
            error={nameHasError}
          />
        </div>
        <div className={classes.col}>
          <Input
            type="text"
            placeholder="Enter your last name"
            label="Last Name"
            onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
            value={lastEntredValue}
            error={lastHasError}
          />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>
          <Input
            type="email"
            placeholder="Enter your email"
            label="Email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailEntredValue}
            error={emailHasError}
          />
        </div>
        <div className={classes.col}>
          <Input
            type="tel"
            placeholder="Phone number XX-XXX-XXXX"
            label="Phone Number"
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
            value={phoneEntredValue}
            error={phoneHasError}
          />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.col}>
          <TextArea
            placeholder="Enter your message"
            label="Message"
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            value={messageEntredValue}
            error={messageHasError}
          />
        </div>
      </div>
      <div className={classes.btncontent}>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default Fields;
