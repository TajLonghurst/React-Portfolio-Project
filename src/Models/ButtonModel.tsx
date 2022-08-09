export type ButtonModel = {
  onClick?: () => void;
  children: React.ReactNode;
  type: "submit" | "reset" | "button";
};
