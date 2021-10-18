import React from "react";
import {
  Container,
  ChartContainer,
  RelationContainer,
  LegendColor,
  Row,
  Percent,
} from "./style";
import { PieChart, Pie, Cell } from "recharts";
import { useTheme } from "../../hooks/useTheme";

interface IPieChartCardProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

export const PieChartCard: React.FC<IPieChartCardProps> = ({ data }) => {
  const { theme } = useTheme();

  function getColor(color: string): string | undefined {
    if (color === "success") return theme.color.success;
    if (color === "warning") return theme.color.warning;
    if (color === "info") return theme.color.info;
  }

  return (
    <Container>
      <RelationContainer>
        Relation
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
      <ChartContainer>
        <PieChart>
          <Pie data={data} dataKey="percent">
            {data &&
              data.map((data, index) => {
                return <Cell key={index} fill={getColor(data.color)} />;
              })}
          </Pie>
        </PieChart>
      </ChartContainer>
    </Container>
  );
};
