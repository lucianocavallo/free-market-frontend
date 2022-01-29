import { useContext, useEffect } from "react";
import { Menu } from "../Menu";
import { Logo } from "../Logo";
import { Categories } from "../Categories";
import { Container, Nav } from "./styles";
import { Context } from "../../context/context";

const Header: React.FC = () => {
  const { user } = useContext(Context);
  useEffect(() => {
    if (user !== undefined) {
      if (Object.keys(user).length) {
        console.log("User: ", user);
      }
    }
  }, [user]);
  return (
    <Container>
      <Nav>
        <Logo />
        <Categories />
        <Menu email={user && user.email} />
      </Nav>
    </Container>
  );
};

export { Header };
