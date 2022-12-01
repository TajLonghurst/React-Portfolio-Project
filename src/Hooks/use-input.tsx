import React, { useState } from "react";

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //eslint-disable-line

const phoneNumberRegex = /^([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; //eslint-disable-line

const useInput = (validateType: string) => {
  const [entredValue, setEntredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  let validity;

  if (validateType === "firstName") {
    validity = entredValue.trim() !== "";
  }
  if (validateType === "lastName") {
    validity = entredValue.trim() !== "";
  }
  if (validateType === "email") {
    validity = emailRegex.test(entredValue);
  }
  if (validateType === "phoneNumber") {
    validity = entredValue.trim() !== "";
  }
  if (validateType === "message") {
    validity = entredValue.trim() !== "";
  }

  const valueIsValid = validity;
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEntredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setEntredValue("");
    setIsTouched(false);
  };

  return {
    value: entredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useInput;
