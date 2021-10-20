import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    opacity: .3;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
  `;

export const Container = styled.div`
  width: 48%;
  height: 22.5rem;
  border-radius: 1rem;
  background-color: var(--card);
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

  @media (max-width: 870px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  color: var(--text);
  font-size: 2.3rem;
  font-weight: 400;
`;

export const Subtitle = styled.h3`
  color: var(--text);
  font-size: 1.8rem;
  font-weight: 300;
`;
