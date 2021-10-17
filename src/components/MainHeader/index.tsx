import React, { useState } from "react";
import { Container, Profile, Welcome, Username } from "./style";
import { Toggle } from "../Toogle";
import { useTheme } from "../../hooks/useTheme";

export const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? false : true
  );

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  return (
    <Container>
      <Toggle checked={darkTheme} onChange={handleChangeTheme} />
      <Profile>
        <Username>Hello Júlio Gonçalves.</Username>
        <Welcome>Welcome to My Wallet.</Welcome>
      </Profile>
    </Container>
  );
};
