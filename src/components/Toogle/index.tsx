import React from "react";
import { Container, ToggleLabel, StyledSwitch } from "./style";
import { sun, moon } from "./icons";

interface IToggleProps {
  checked: boolean;
  onChange(): void;
}

export const Toggle: React.FC<IToggleProps> = ({checked, onChange}) => {
  return (
    <Container>
      <ToggleLabel></ToggleLabel>
      <StyledSwitch
        onChange={onChange}
        checked={checked}
        uncheckedIcon={moon}
        checkedIcon={sun}
        offColor="#34206e"
        onColor="#c9a204"
        handleDiameter={20}
        activeBoxShadow=''
      />
    </Container>
  );
};
