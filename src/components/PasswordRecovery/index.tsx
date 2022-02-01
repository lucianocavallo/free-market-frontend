import { useEffect, useRef, useState } from "react";
import { Form, Input, Message } from "./styles";
import { useSearchParams } from "react-router-dom";

import { Box } from "../Box";
import { Error } from "../Error";
import { PrimaryButton } from "../PrimaryButton";

const PasswordRecovery: React.FC = () => {
  const form: React.RefObject<HTMLFormElement> = useRef(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [params] = useSearchParams();

  useEffect(() => {
    const urlToken = params.get("token");
    if (urlToken) {
      setToken(urlToken);
    }
  }, []);

  const handleSendEmail: React.FormEventHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(form.current as HTMLFormElement);
    const email = formData.get("email");
    try {
      const res = await fetch(`${process.env.API_URL}/auth/recovery`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (res.status === 200) {
        setMessage("Your mail has been sent, check your inbox");
      } else {
        const data = await res.json();
        setError(true);
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const handleChangePassword: React.FormEventHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(form.current as HTMLFormElement);
    const password = formData.get("password");
    const res = await fetch(`${process.env.API_URL}/auth/change-password`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, newPassword: password }),
    });
    if (res.status === 200) {
      setMessage("Your password was successfully changed");
    }
    setLoading(false);
  };

  const handleOnInputChange = () => {
    if (error) {
      setError(false);
    }
    if (loading) {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Form
        onSubmit={token ? handleChangePassword : handleSendEmail}
        ref={form}
      >
        <h2>Password Recovery</h2>
        {!token && (
          <>
            <label htmlFor="email">Email:</label>
            <Input
              className={error ? "error" : ""}
              required
              type="text"
              id="email"
              name="email"
              onChange={handleOnInputChange}
            />
          </>
        )}
        {token && (
          <>
            <label htmlFor="password">Enter a New Password:</label>
            <Input
              className={error ? "error" : ""}
              required
              type="password"
              id="password"
              name="password"
              onChange={handleOnInputChange}
            />
          </>
        )}
        {message && <Message>{message}</Message>}
        {error && <Error error={"The email you've entered doesn't exist"} />}
        <PrimaryButton disabled={loading}>
          {token ? "Change Password" : "Send Email"}
        </PrimaryButton>
      </Form>
    </Box>
  );
};

export { PasswordRecovery };
