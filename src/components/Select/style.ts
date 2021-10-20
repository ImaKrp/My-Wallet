import styled from "styled-components";

export const Container = styled.div``;

export const SelectElement = styled.select`
  padding: 0.6rem 0.8rem;
  border-radius: 0.4rem;
  border: 1px solid var(--terciary);
  background-color: var(--secondary);
  color: var(--text);
  width: 12rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url(${props => props.theme.image.select});
  background-repeat: no-repeat;
  background-size: 1.2rem;
  background-position-x: 95%;
  background-position-y: 55%;
  transition: box-shadow 0.3s, border 0.3s, color 0.3s, background-color 0.3s;
  &:focus {
    box-shadow: 0 0 0 2px var(--focus);
  }
`;
