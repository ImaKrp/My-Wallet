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
        <MenuItem>
          <MdSpaceDashboard />
          Dashboard
        </MenuItem>
        <MenuItem>
          <MdArrowUpward />
          Funds entering
        </MenuItem>
        <MenuItem>
          <MdArrowDownward />
          Funds leaving
        </MenuItem>
        <MenuItem>
          <MdExitToApp />
          Sign out
        </MenuItem>
      </MenuContainer>
    </Container>
  );
};
