import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, SubContainer, Form, Input } from "./styles";
import { CustomerSchema } from "../../utils/YupSchemas";

import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";
import { Error } from "../Error";

const Signup = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const form: React.RefObject<HTMLFormElement> = useRef(null);

  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current as HTMLFormElement);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
      phone: formData.get("phone"),
    };

    const validation = await CustomerSchema.validate(data)
      .then((validation) => validation)
      .catch((error) => {
        return error;
      });
    if (validation.errors !== undefined) {
      setError(validation.message);
    } else {
      setError("");
      console.log("validation successfull");
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <Container>
      <SubContainer>
        <Form onSubmit={handleSubmit} ref={form}>
          <h2>Sign up</h2>
          <label htmlFor="name">Name:</label>
          <Input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <Input type="text" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <Input type="password" id="password" name="password" />
          <label htmlFor="phone">Phone:</label>
          <Input type="tel" id="phone" name="phone" />
          {error && <Error error={error} />}
          <PrimaryButton>Create Account</PrimaryButton>
        </Form>
        <SecondaryButton type="button" onClick={handleLoginClick}>
          Login
        </SecondaryButton>
      </SubContainer>
    </Container>
  );
};

export { Signup };
