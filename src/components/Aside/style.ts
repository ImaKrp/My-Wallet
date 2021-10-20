import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

const slideIn = keyframes`
  from {
    height: 7rem;
  }
  to {
    height: 100vh;
  }
`;

const slideOut = keyframes`
  from {
    height: 100vh;
  }
  to {
    height: 7rem;
  }
`;

interface IContainerProps {
  isActive: boolean;
}

export const Container = styled.div<IContainerProps>`
  grid-area: AS;
  border-right: 1px solid var(--terciary);
  background-color: var(--secondary);
  color: var(--text);
  transition: background-color 0.3s, color 0.3s, border 0.3s;
  padding: 0 2rem;
  min-width: 20rem;
  overflow: hidden;
  position: relative;

  @media (max-width: 600px) {
    position: fixed;
    z-index: 2;
    overflow: hidden;
    height: ${({ isActive }) => (isActive ? `100vh` : "7rem")};
    ${({ isActive }) =>
      !isActive &&
      css`
        border-right: 0;
        border-bottom: 1px solid var(--terciary);
        width: 9.75rem;
      `};
    animation: ${({ isActive }) =>
      isActive
        ? css`
            ${slideIn} 1s forwards;
          `
        : css`
            ${slideOut} 1s forwards;
          `};
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 7rem;
  align-items: center;
  display: flex;
  gap: 1.6rem;
`;

export const Logo = styled.div`
  height: 5.75rem;
  width: 5.75rem;
  background-position: center;
  background-image: url(${(props) => props.theme.image.wallet});
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const MenuContainer = styled.nav`
  padding: 3rem 0 0 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  color: var(--success);
`;

export const MenuItem = styled(Link)`
  font-size: 1.6rem;
  display: flex;
  transition: opacity 0.3s, color 0.3s;
  width: fit-content;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;
  color: var(--success);

  &:hover {
    opacity: 0.7;
  }
  > svg {
    font-size: 2rem;
  }
`;

export const SignOutBtn = styled.button`
  font-size: 1.6rem;
  display: flex;
  transition: opacity 0.3s, color 0.3s;
  width: fit-content;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;
  color: var(--success);
  background-color: transparent;

  &:hover {
    opacity: 0.7;
  }
  > svg {
    font-size: 2rem;
  }
`;

export const Title = styled.h1<IContainerProps>`
  @media (max-width: 600px) {
    display: ${({ isActive }) => (isActive ? `flex` : "none")};
  }
`;

export const AsideBtn = styled.button`
  height: 3.75rem;
  width: 3.75rem;
  border-radius: 0.6rem;
  background-color: var(--card-success);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: var(--white);

  @media (min-width: 600px) {
    display: none;
  }
`;

export const ToggleDiv = styled.div<IContainerProps>`
  position: absolute;
  bottom: 1rem;
  left: 0;
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    display: ${({ isActive }) => (isActive ? `flex` : "none")};
  }
`;
