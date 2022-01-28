import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Layout } from "./components/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <GlobalStyle />
      </Layout>
    </>
  );
};

export { App };
