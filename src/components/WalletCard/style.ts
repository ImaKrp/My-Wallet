import styled, {keyframes} from "styled-components";
import CountUp from "react-countup";

type cardColor = {
  color: string;
};

const animate = keyframes`
    0%{
        transform: translateX(100px);
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

export const Container = styled.div<cardColor>`
  width: 31%;
  height: 18rem;
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
  animation: ${animate} .5s;
  > div {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  &:hover {
    transform: scale(1.02);
  }

  .prefixValue {
    width: fit-content;
    color: var(--white);
    font-size: 2.8rem;
    font-weight: 500;
  }

  .row {
    display: flex;
  }

  @media (min-width: 421px) and (max-width: 870px) {
    span {
      word-wrap: break-word;
    }
    .row {
      flex-direction: column;
      font-size: 2.2rem;
    }
  }

  @media (max-width: 870px) {
    width: 100%;
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
