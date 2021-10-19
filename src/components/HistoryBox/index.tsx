import React from "react";
import { Container, Row, LegendColor, LineChartEl } from "./style";
import {
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "../../hooks/useTheme";
import formatAmountValue from "../../utils/formatAmountValue";

interface IHistoryBox {
  data: {
    monthNumber: number;
    month: string;
    amountOutput: string;
    amountEntry: string;
  }[];
  lineColorEntry: string;
  lineColorOutput: string;
}

export const HistoryBox: React.FC<IHistoryBox> = ({
  data,
  lineColorEntry,
  lineColorOutput,
}) => {
  const { theme } = useTheme();

  function getColor(color: string): string | undefined {
    if (color === "success") return theme.color.success;
    if (color === "warning") return theme.color.warning;
    if (color === "info") return theme.color.info;
  }

  return (
    <Container>
      <Row>
        History
        <div>
          <div>
            <LegendColor color="info" />
            Gains
          </div>
          <div>
            <LegendColor color="warning" />
            Expenses
          </div>
        </div>
      </Row>
      <ResponsiveContainer>
        <LineChartEl data={data} margin={{ right: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={getColor("card")} />
          <XAxis dataKey="month" stroke={getColor("card")} />
          <Tooltip formatter={(value) => formatAmountValue(Number(value))} />
          <Line
            type="monotone"
            dataKey="amountEntry"
            name="Gains"
            stroke={getColor(lineColorEntry)}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="amountOutput"
            name="Expenses"
            stroke={getColor(lineColorOutput)}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChartEl>
      </ResponsiveContainer>
    </Container>
  );
};
