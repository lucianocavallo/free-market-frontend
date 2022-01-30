import { Header } from "../Header";
import { Container, Footer } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer>
        <span>Created by lucianocavallo -&nbsp;</span>
        <a href="https://github.com/lucianocavallo">
          https://github.com/lucianocavallo
        </a>
      </Footer>
    </Container>
  );
};

export { Layout };
