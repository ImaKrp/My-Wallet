import React from "react";
import { Container, Profile, Welcome, Username } from "./style";
import { Toggle } from "../Toogle";
export const MainHeader: React.FC = () => {
  return (
    <Container>
      <Toggle/>
      <Profile>
        <Username>Hello Júlio Gonçalves.</Username>
        <Welcome>Welcome to My Wallet.</Welcome>
      </Profile>
    </Container>
  );
};
