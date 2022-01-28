import React, { useRef } from "react";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";
import { Container, SubContainer, Form, Input } from "./styles";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const form: React.RefObject<HTMLFormElement> = useRef(null);

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current as HTMLFormElement);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  const handleLoginClick = () => {
    navigate("/signup");
  };
  return (
    <Container>
      <SubContainer>
        <Form onSubmit={handleSubmit} ref={form}>
          <h2>Login</h2>
          <label htmlFor="email">Email:</label>
          <Input required type="text" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <Input required type="password" id="password" name="password" />
          <PrimaryButton>Login</PrimaryButton>
        </Form>
        <SecondaryButton type="button" onClick={handleLoginClick}>
          Create Account
        </SecondaryButton>
      </SubContainer>
    </Container>
  );
};

export { Login };
