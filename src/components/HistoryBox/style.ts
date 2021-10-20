import styled, {keyframes} from "styled-components";

import { LineChart } from "recharts";

type legendColor = {
  color: string;
};

const animate = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const LineChartEl = styled(LineChart)`
  color: var(--black);
`;

export const Container = styled.div`
  width: 100%;
  height: 32rem;
  border-radius: 1rem;
  background-color: var(--card);
  transition: background-color 0.3s, transform 0.3s;
  overflow: hidden;
  position: relative;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  animation: ${animate} .5s;
  &:hover {
    transform: scale(1.01);
  }
`;

export const Row = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: var(--text);
  font-size: 2.3rem;
  font-weight: 400;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    > div {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1.8rem;
    }
  }
`;

export const LegendColor = styled.div<legendColor>`
  width: 2rem;
  height: 2rem;
  background-color: ${({ color }) => color && `var(--${color})`};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 1.5rem;
  font-weight: 400;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
