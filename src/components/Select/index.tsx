import React from "react";
import { Container, SelectElement } from "./style";

interface ISelectProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  value: string | undefined;
}

export const Select: React.FC<ISelectProps> = ({ options, onChange, value }) => {
  return (
    <Container>
      <SelectElement onChange={onChange} value={Number(value)}>
        {options &&
          options.map((item, key) => (
            <option key={key} value={item.value}>
              {item.label}
            </option>
          ))}
      </SelectElement>
    </Container>
  );
};
