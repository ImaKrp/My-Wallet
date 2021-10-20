import React, { InputHTMLAttributes } from "react";
import { InputEl } from "./style";

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<IInputProps> = ({ ...rest }) => {
  return <InputEl {...rest} />;
};
