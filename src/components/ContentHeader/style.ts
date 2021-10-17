import styled from "styled-components";

type barColor = {
  color?: string;
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3<barColor>`
  font-size: 2rem;
  position: relative;

  &:after {
    content: "";
    width: 80%;
    height: 0.2rem;
    background-color: ${({ color }) => (color ? `var(--${color})` : "var(--info)")};
    position: absolute;
    left: 0;
    bottom: -0.8rem;
  }
`;

export const Controllers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
`;
