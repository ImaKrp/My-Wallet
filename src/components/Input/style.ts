import styled from "styled-components";

export const InputEl = styled.input`
  color: var(--text);
  border-radius: 0.6rem;
  height: 3.5rem;
  width: 100%;
  border: 1px solid var(--terciary);
  background-color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 1rem;
  font-size: 1.5rem;
  transition: box-shadow 0.3s, border 0.3s, color 0.3s, background-color 0.3s;
  &:focus {
    box-shadow: 0 0 0 2px var(--focus);
  }
`;
