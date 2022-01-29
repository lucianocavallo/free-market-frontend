import React, { useRef } from "react";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";
import { Container, SubContainer, Form, Input } from "./styles";
import { useNavigate } from "react-router-dom";

// model json to send in the body when creating a customer
//   "firstName": "Luciano2",
//   "lastName": "Cavallo2",
//   "phone": "989834532",
//   "user": {"email": "luciano@customer.com", "password": "admin123"}
// }

const Signup = () => {
  const navigate = useNavigate();

  const form: React.RefObject<HTMLFormElement> = useRef(null);

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current as HTMLFormElement);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
      phone: formData.get("phone"),
    };
    console.log(data);
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
          <Input required type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <Input required type="text" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <Input required type="password" id="password" name="password" />
          <label htmlFor="phone">Phone:</label>
          <Input required type="tel" id="phone" name="phone" />
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
