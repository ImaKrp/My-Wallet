import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 33%;
  min-width: 50rem;
  min-height: 100vh;
  height: 100%;
  background-color: var(--primary);
  border: 1px solid var(--terciary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3%;
  gap: 1.3rem;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  h1 {
    color: var(--text);
    font-size: 2.3rem;
  }
  margin-bottom: 1rem;
`;

export const Logo = styled.div`
  height: 6rem;
  width: 6rem;
  background-position: center;
  background-image: url(${(props) => props.theme.image.wallet});
  background-repeat: no-repeat;
  background-size: 100%;
`;

export const SignInBtn = styled.button`
  margin-top: 0.7rem;
  width: 50%;
  height: 4rem;
  background-color: var(--card-success);
  color: var(--white);
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  letter-spacing: 2px;
  font-weight: bold;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;

export const InputDiv = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const Label = styled.label`
  color: var(--text);
  font-size: 1.4rem;
`;

export const Redirect = styled(Link)`
  color: var(--success);
  font-size: 1.4rem;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
