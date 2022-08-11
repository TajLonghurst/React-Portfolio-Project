export type TextAreaModel = {
  placeholder: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
  value: string;
  error: boolean;
};
