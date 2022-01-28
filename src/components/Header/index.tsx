import { SearchBar } from "../SearchBar";
import { HeaderButtons } from "../HeaderButtons";
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
      <HeaderButtons />
    </Container>
  );
};

export { Header };
