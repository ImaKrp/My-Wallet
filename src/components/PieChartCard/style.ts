import styled from "styled-components";
import { ResponsiveContainer } from "recharts";
import CountUp from "react-countup";

type legendColor = {
  color: string;
};

export const Container = styled.div`
  width: 48%;
  height: 24rem;
  border-radius: 1rem;
  background-color: var(--card);
  transition: background-color 0.3s, transform 0.3s;
  overflow: hidden;
  position: relative;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    transform: scale(1.02);
  }
`;

export const ChartContainer = styled(ResponsiveContainer)`
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const RelationContainer = styled.div`
  height: 100%;
  width: 40%;
  color: var(--text);
  font-size: 2.3rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }
`;

export const LegendColor = styled.div<legendColor>`
  width: 5rem;
  height: 5rem;
  background-color: ${({ color }) => color && `var(--card-${color})`};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Percent = styled(CountUp)`
  color: var(--white);
  font-size: 1.6rem;
  font-weight: 400;
`;

export const Row = styled.div`
  color: var(--text);
  font-size: 1.8rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;
