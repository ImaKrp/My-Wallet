import React from "react";
import { Container, Title, Subtitle } from "./style";

interface ISelectProps {
  firstTitle: string;
  secondTitle?: string;
  subtitle: string;
}

export const MessageCard: React.FC<ISelectProps> = ({
  firstTitle,
  secondTitle,
  subtitle,
}) => {
  return (
    <Container>
      <div>
        <Title>{firstTitle}</Title>
        {secondTitle && <Title>{secondTitle}</Title>}
      </div>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};
