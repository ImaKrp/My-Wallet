import React from "react";
import { Container, Column, Title, Subtitle, Amount } from "./style";

interface IListCard {
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

export const ListCard: React.FC<IListCard> = ({
  tagColor,
  title,
  subtitle,
  amount,
}) => {
  return (
    <Container tagColor={tagColor}>
      <Column>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Column>
      <Amount>$ {amount}</Amount>
    </Container>
  );
};
