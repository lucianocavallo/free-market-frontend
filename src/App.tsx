import React, { Suspense } from "react";
import { useContext } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "./context/context";

import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";

const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const SignUpPage = React.lazy(() => import("./pages/SignupPage"));
const UserPage = React.lazy(() => import("./pages/UserPage"));
const CheckoutPage = React.lazy(() => import("./pages/CheckoutPage"));
const PasswordRecoveryPage = React.lazy(
  () => import("./pages/PasswordRecoveryPage")
);

const App: React.FC = () => {
  const { user } = useContext(Context);
  let isUser;
  if (user !== undefined) {
    isUser = Object.keys(user).length;
  }

  return (
    <Suspense fallback={<div />}>
      <BrowserRouter>
        <Layout>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route
              path="/user"
              element={isUser ? <UserPage /> : <LoginPage />}
            />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/recovery" element={<PasswordRecoveryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
};

export { App };
