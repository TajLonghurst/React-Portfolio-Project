import React from "react";

export type InputModel = {
  type: string;
  placeholder: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  value: string;
  error: boolean;
};
