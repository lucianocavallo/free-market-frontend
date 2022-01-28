import { SearchBar } from "../SearchBar";
import { Menu } from "../Menu";
import { Logo } from "../Logo";
// import { Categories } from "../Categories";
import { Container, UpperNav } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <UpperNav>
        <Logo />
        <SearchBar />
      </UpperNav>
      <Menu />
    </Container>
  );
};

export { Header };
