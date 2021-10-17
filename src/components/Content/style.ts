import styled from "styled-components";

export const Container = styled.div`
  grid-area: CT;
  background-color: var(--primary);
  color: var(--text);
  transition: background-color 0.3s, color 0.3s;
  padding: 2rem 2rem;
  height: calc(100vh - 7rem);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--primary);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--secondary);
  }
`;
