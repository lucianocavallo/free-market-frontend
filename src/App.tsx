import { useContext } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Context } from "./context/context";

import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignupPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { UserPage } from "./pages/UserPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { PasswordRecoveryPage } from "./pages/PasswordRecoveryPage";

const App: React.FC = () => {
  const { user } = useContext(Context);
  let isUser;
  if (user !== undefined) {
    isUser = Object.keys(user).length;
  }

  return (
    <BrowserRouter>
      <Layout>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/user" element={isUser ? <UserPage /> : <LoginPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/recovery" element={<PasswordRecoveryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export { App };
