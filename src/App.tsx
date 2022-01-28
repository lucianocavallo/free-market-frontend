import { GlobalStyle } from "./styles/GlobalStyles";
import { Layout } from "./components/Layout";
import { ProductsList } from "./components/ProductsList";

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <ProductsList />
      </Layout>
    </>
  );
};

export { App };
