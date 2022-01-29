import React, { useRef, useState, useContext } from "react";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";
import { Container, SubContainer, Form, Input } from "./styles";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(Context);
  const [error, setError] = useState(false);

  const form: React.RefObject<HTMLFormElement> = useRef(null);

  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current as HTMLFormElement);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const uri = `${process.env.API_URL}/auth/login`;
    try {
      const res = await fetch(uri, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.status === 200) {
        const resData = await res.json();
        if (setUser !== undefined) {
          const newUser = {
            email: resData.user.email,
            token: resData.token,
            role: resData.user.role,
          };
          setUser(newUser);
        }
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
    }
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
          <Input
            className={error ? "error" : ""}
            required
            type="text"
            id="email"
            name="email"
          />
          <label htmlFor="password">Password:</label>
          <Input
            className={error ? "error" : ""}
            required
            type="password"
            id="password"
            name="password"
          />
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
