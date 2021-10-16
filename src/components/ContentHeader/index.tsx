import React from "react";
import { Container, Title, Controllers } from "./style";

interface IContentHeader {
  title: string;
  color?: string;
  children: React.ReactNode;
}

export const ContentHeader: React.FC<IContentHeader> = ({
  title,
  color,
  children,
}) => {

  return (
    <Container>
      <Title color={color}>{title}</Title>
      <Controllers>
        {children}
      </Controllers>
    </Container>
  );
};
