import React, { useState } from "react";
import {
  Container,
  Header,
  Logo,
  MenuContainer,
  MenuItem,
  SignOutBtn,
  Title,
  AsideBtn,
  ToggleDiv,
} from "./style";
import { Toggle } from "../Toogle";
import {
  MdSpaceDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdOutlineMenu,
  MdClose,
} from "react-icons/md";

import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";

export const Aside: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? false : true
  );

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };
  const { signOut } = useAuth();
  const [active, setActive] = useState(true);
  return (
    <Container isActive={active}>
      <Header>
        <AsideBtn onClick={() => setActive(!active)}>
          {active ? <MdClose /> : <MdOutlineMenu />}
        </AsideBtn>
        <Logo />
        <Title isActive={active}>My Wallet</Title>
      </Header>
      <MenuContainer>
        <MenuItem to="/dashboard">
          <MdSpaceDashboard />
          Dashboard
        </MenuItem>
        <MenuItem to="/list/gains">
          <MdArrowUpward />
          Gains
        </MenuItem>
        <MenuItem to="/list/expenses">
          <MdArrowDownward />
          Expenses
        </MenuItem>
        <SignOutBtn onClick={signOut}>
          <MdExitToApp />
          Sign out
        </SignOutBtn>
      </MenuContainer>
      <ToggleDiv isActive={active}>
        <Toggle checked={darkTheme} onChange={handleChangeTheme} />
      </ToggleDiv>
    </Container>
  );
};
