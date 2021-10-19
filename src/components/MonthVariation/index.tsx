import React from "react";
import {
  Container,
  ChartContainer,
  RelationContainer,
  LegendColor,
  Row,
  Percent,
  BarChartEl,
  MaxHeight,
} from "./style";
import { Bar, Cell, Tooltip, XAxis } from "recharts";
import { useTheme } from "../../hooks/useTheme";
import formatAmountValue from "../../utils/formatAmountValue";

interface IPieChartCardProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

export const MonthVariation: React.FC<IPieChartCardProps> = ({
  title,
  data,
}) => {
  const { theme } = useTheme();

  function getColor(color: string): string | undefined {
    if (color === "success") return theme.color.success;
    if (color === "warning") return theme.color.warning;
    if (color === "info") return theme.color.info;
    if (color === "card") return theme.color.card;
    if (color === "text") return theme.color.text;
  }

  return (
    <Container>
      <RelationContainer>
        {title}
        <div>
          {data &&
            data.map((data, index) => {
              return (
                <Row key={index}>
                  <LegendColor color={data.color}>
                    <Percent
                      start={0}
                      end={data.percent}
                      separator="."
                      duration={1}
                      suffix="%"
                      decimals={1}
                    />
                  </LegendColor>
                  {data.name}
                </Row>
              );
            })}
        </div>
      </RelationContainer>
      <MaxHeight>
        <ChartContainer>
          <BarChartEl data={data}>
            <Bar dataKey="amount" name="Value">
              {data &&
                data.map((data, index) => {
                  return (
                    <Cell
                      key={index}
                      fill={getColor(data.color)}
                      cursor="pointer"
                    />
                  );
                })}
            </Bar>
            <XAxis dataKey="name" stroke={getColor("text")} />
            <Tooltip
              cursor={{ fill: "none" }}
              formatter={(value) => formatAmountValue(Number(value))}
            />
          </BarChartEl>
        </ChartContainer>
      </MaxHeight>
    </Container>
  );
};
