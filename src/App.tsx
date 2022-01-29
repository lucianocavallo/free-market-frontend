import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Layout } from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignupPage";
import { NotFoundPage } from "./pages/NotFoundPage";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const url = `${process.env.API_URL}/products`;

    (async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setProducts(data);
    })();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export { App };
