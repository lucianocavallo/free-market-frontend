import React from "react";
import { useContext } from "react";
import { Menu } from "../Menu";
import { Logo } from "../Logo";
import { Categories } from "../Categories";
import { Container, Nav, MessageDiv } from "./styles";
import { Context } from "../../context/context";

const Header: React.FC = () => {
  const { user, filter, setFilter } = useContext(Context);

  return (
    <Container>
      {!user && (
        <MessageDiv>
          <h2>login or create an account to start shopping</h2>
        </MessageDiv>
      )}
      <Nav>
        <Logo />
        <Categories setFilter={setFilter} filter={filter} />
        <Menu email={user && user.email} />
      </Nav>
    </Container>
  );
};

export { Header };
