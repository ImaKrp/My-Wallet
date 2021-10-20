import React, { useState } from "react";
import {
  Container,
  Form,
  Title,
  Logo,
  SignInBtn,
  InputDiv,
  Label,
  Redirect,
} from "./style";
import { Input } from "../../../components/Input";
import { useAuth } from "../../../hooks/useAuth";

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signIn } = useAuth();
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    signIn(email, password);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>
          <Logo />
          <h1>My Wallet</h1>
        </Title>
        <InputDiv>
          <Label>Endereço de e-mail.</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira o seu e-mail."
            required
          />
        </InputDiv>
        <InputDiv>
          <Label>Senha.</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Insira sua senha."
            required
          />
        </InputDiv>
        <SignInBtn type="submit">ENTRAR</SignInBtn>
        <Redirect to="/signin">Cadastre-se</Redirect>
      </Form>
    </Container>
  );
};
