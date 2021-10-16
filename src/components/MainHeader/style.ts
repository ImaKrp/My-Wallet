import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;
  border-bottom: 1px solid var(--terciary);
  background-color: var(--secondary);
  color: var(--text);
  transition: background-color 0.3s, color 0.3s, border 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const Welcome = styled.span`
  font-size: 1.4rem;
`;

export const Username = styled.h3`
  font-size: 1.6rem;
`;