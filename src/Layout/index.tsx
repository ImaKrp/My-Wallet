import React from "react";
import { Container } from "./style";
import { MainHeader } from "../components/MainHeader";
import { Content } from "../components/Content";
import { Aside } from "../components/Aside";

export const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Container>
  );
};
