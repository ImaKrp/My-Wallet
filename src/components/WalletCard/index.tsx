import React from "react";
import { Container, Title, Subtitle, Icon, Amount } from "./style";

interface ISelectProps {
  color: string;
  title: string;
  amount: number;
  subtitle: string;
  icon: "dollar" | "arrowUp" | "arrowDown";
}

export const WalletCard: React.FC<ISelectProps> = ({
  color,
  title,
  amount,
  subtitle,
  icon,
}) => {
  return (
    <Container color={color}>
      <div>
        <Title>{title}</Title>
        <div className="row">
          <span className="prefixValue">$</span>
          <Amount
            start={0}
            end={amount}
            separator=","
            duration={1}
            decimals={2}
          />
        </div>
      </div>
      <Subtitle>{subtitle}</Subtitle>
      <Icon src={`/icons/${icon}.svg`} alt={title} />
    </Container>
  );
};
