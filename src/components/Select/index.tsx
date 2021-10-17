import React from "react";
import { Container, SelectElement } from "./style";

interface ISelectProps {
  type: string;
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  value: string | number | undefined;
}

export const Select: React.FC<ISelectProps> = ({
  options,
  onChange,
  value,
  type
}) => {
  return (
    <Container>
      <SelectElement onChange={onChange} value={value}>
        {options && options.length > 0 ? (
          options.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))
        ) : (
          <option value={""} disabled>
            None {type === 'years' ? "year" : "month"} found.
          </option>
        )}
      </SelectElement>
    </Container>
  );
};
