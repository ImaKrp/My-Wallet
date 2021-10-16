import React from "react";
import { Container, SelectElement } from "./style";

interface ISelectProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
}

export const Select: React.FC<ISelectProps> = ({options}) => {
  return (
    <Container>
      <SelectElement>
        {options && options.map(item => (
          <option value={item.value}>{item.label}</option>
        ))}
      </SelectElement>
    </Container>
  );
};
