import { useContext, useEffect } from "react";
import { Menu } from "../Menu";
import { Logo } from "../Logo";
import { Categories } from "../Categories";
import { Container, Nav } from "./styles";
import { Context } from "../../context/context";

const Header: React.FC = () => {
  const { user, setFilter } = useContext(Context);

  return (
    <Container>
      <Nav>
        <Logo />
        <Categories setFilter={setFilter} />
        <Menu email={user && user.email} />
      </Nav>
    </Container>
  );
};

export { Header };
