import styled from "styled-components";

type buttonColor = {
  color?: string;
  active?: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Filters = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.5rem 0 2rem 0;
`;

export const Button = styled.button<buttonColor>`
  background-color: transparent;
  color: var(--text);
  font-size: 1.8rem;
  font-weight: 400;
  border-radius: 5px;
  transition: opacity 0.3s, color 0.3s;
  position: relative;
  opacity: ${({ active }) => active ? '1' : '0.6'};

  &::after {
    content: "";
    width: 100%;
    height: 0.2rem;
    background-color: ${({ color }) => color && `var(--${color})`};
    position: absolute;
    left: 0;
    bottom: -0.2rem;
    transition: background-color 0.3s, opacity 0.3s;
  }
  &:hover::after {
    opacity: ${({ active }) => active ? '0.7' : '0.4'};
  }
  &:hover {
    opacity: ${({ active }) => active ? '0.7' : '0.4'};
  }
`;
