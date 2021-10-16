import styled from "styled-components";

type Colors = {
  cardColor?: string;
  tagColor?: string;
};

export const Container = styled.li<Colors>`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ cardColor }) =>
    cardColor ? `var(--${cardColor})` : "var(--card)"};
  border-left: 6px solid
    ${({ tagColor }) => (tagColor ? `var(--${tagColor})` : "var(--card)")};
  transition: background-color 0.3s, border 0.3s, transform 0.2s, opacity 0.3s;
  border-radius: 6px;
  padding: 1.2rem 2rem;

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
