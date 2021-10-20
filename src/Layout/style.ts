import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 7rem auto;
  grid-template-areas:
    "AS MH"
    "AS CT";
  height: 100vh;
  width: 100vw;

  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-rows: 7rem auto;
    grid-template-areas:
      "MH"
      "CT";
  }
`;
