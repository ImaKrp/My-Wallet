import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  grid-area: AS;
  border-right: 1px solid var(--terciary);
  background-color: var(--secondary);
  color: var(--text);
  transition: background-color 0.3s, color 0.3s, border 0.3s;
  padding-left: 2rem;
`;

export const Header = styled.header`
  width: 100%;
  height: 7rem;
  align-items: center;
  display: flex;
  gap: 1.6rem;
`;

export const Logo = styled.img`
  height: 5.75rem;
  width: 5.75rem;
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

export const Title = styled.h1``;
