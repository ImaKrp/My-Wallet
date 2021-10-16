import React, { useState } from "react";
import { Container, ToggleLabel, StyledSwitch } from "./style";
import { sun, moon } from "./icons";

export const Toggle: React.FC = () => {
  const [checked, setCheck] = useState(false);

  return (
    <Container>
      <ToggleLabel></ToggleLabel>
      <StyledSwitch
        onChange={() => setCheck(!checked)}
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
