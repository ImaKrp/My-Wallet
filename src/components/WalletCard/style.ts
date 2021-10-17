import styled from "styled-components";
import CountUp from "react-countup";

type cardColor = {
  color: string;
};

export const Container = styled.div<cardColor>`
  width: 31%;
  height: 20rem;
  border-radius: 1rem;
  background-color: ${({ color }) => color && `var(--card-${color})`};
  transition: background-color 0.3s, transform 0.3s;
  overflow: hidden;
  position: relative;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const Title = styled.h2`
  color: var(--white);
  font-size: 2.2rem;
  font-weight: 400;
`;

export const Subtitle = styled.h3`
  color: var(--white);
  font-size: 1.4rem;
  font-weight: 300;
`;

export const Amount = styled(CountUp)`
  color: var(--white);
  font-size: 2.8rem;
  font-weight: 500;
`;

export const Icon = styled.img`
  height: 110%;
  position: absolute;
  top: -5%;
  right: -5%;
  opacity: 0.5;
`;
