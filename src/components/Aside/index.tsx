import React from "react";
import {
  Container,
  Header,
  Logo,
  MenuContainer,
  MenuItem,
  Title,
} from "./style";
import {
  MdSpaceDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

export const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo src="/icons/wallet.svg" alt="logo" />
        <Title>My Wallet</Title>
      </Header>
      <MenuContainer>
        <MenuItem to="/dashboard">
          <MdSpaceDashboard />
          Dashboard
        </MenuItem>
        <MenuItem to="/list/entry-balance">
          <MdArrowUpward />
          Entry Balance
        </MenuItem>
        <MenuItem to="/list/exit-balance">
          <MdArrowDownward />
          Exit Balance
        </MenuItem>
        <MenuItem to="/dashboard">
          <MdExitToApp />
          Sign out
        </MenuItem>
      </MenuContainer>
    </Container>
  );
};
