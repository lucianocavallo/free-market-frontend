import { Menu } from "../Menu";
import { Logo } from "../Logo";
import { Categories } from "../Categories";
import { Container, Nav } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Nav>
        <Logo />
        <Categories />
        <Menu />
      </Nav>
    </Container>
  );
};

export { Header };
