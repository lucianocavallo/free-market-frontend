import React, { useRef, useState, useContext } from "react";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";
import { Form, Input, Link } from "./styles";
import { Box } from "../Box";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context";
import { Error } from "../Error";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(Context);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const form: React.RefObject<HTMLFormElement> = useRef(null);

  const handleSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(form.current as HTMLFormElement);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    try {
      const res = await fetch(`${process.env.API_URL}/auth/login`, {
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
            userId: resData.user._id,
          };
          setUser(newUser);
          navigate("/user");
        }
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnInputChange = () => {
    if (error) {
      setError(false);
    }
    if (loading) {
      setLoading(false);
    }
  };

  const handleNavigateClick = () => navigate("/signup");

  return (
    <Box>
      <Form onSubmit={handleSubmit} ref={form}>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <Input
          className={error ? "error" : ""}
          required
          type="text"
          id="email"
          name="email"
          onChange={handleOnInputChange}
        />
        <label htmlFor="password">Password:</label>
        <Input
          className={error ? "error" : ""}
          required
          type="password"
          id="password"
          name="password"
          onChange={handleOnInputChange}
        />
        {error && (
          <Error
            error={"The email or password are incorrect, please try again"}
          />
        )}
        <PrimaryButton disabled={loading}>Login</PrimaryButton>
      </Form>
      <Link to="/recovery">forgot my password</Link>
      <SecondaryButton type="button" onClick={handleNavigateClick}>
        Create Account
      </SecondaryButton>
    </Box>
  );
};

export { Login };
