import { GlobalStyle } from "./styles/GlobalStyles";
import { Layout } from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignupPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { UserPage } from "./pages/UserPage";
import { useContext } from "react";
import { Context } from "./context/context";

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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export { App };
