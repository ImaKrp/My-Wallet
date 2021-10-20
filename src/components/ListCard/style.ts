import styled, {keyframes} from "styled-components";

type Colors = {
  tagColor?: string;
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

export const Container = styled.li<Colors>`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--card);
  border-left: 4px solid
    ${({ tagColor }) => (tagColor ? `var(--${tagColor})` : "var(--card)")};
  transition: background-color 0.3s, border 0.3s, transform 0.2s, opacity 0.3s;
  border-radius: 6px;
  padding: 1.2rem 2rem;
  animation: ${animate} .5s;
  &:hover {
    transform: translateX(0.5rem);
    opacity: 0.8;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
`;

export const Subtitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 300;
`;

export const Amount = styled.h2`
  font-size: 1.8rem;
`;
