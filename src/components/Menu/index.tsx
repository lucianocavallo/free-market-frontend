import { useState } from "react";
import cart from "../../assets/icons/cart.svg";
import menu from "../../assets/icons/menu.svg";
import { Link } from "react-router-dom";
import {
  Container,
  CartImg,
  Button,
  EmailButton,
  MenuImg,
  MenuButton,
  Figure,
} from "./styles";
import { DropdownMenu } from "../DropdownMenu";

const Menu: React.FC<User> = ({ email }) => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const toggleShowMenu = () => setShowDropdownMenu(!showDropdownMenu);
  return (
    <Container>
      {email && <EmailButton>{email}</EmailButton>}
      {!email && (
        <>
          <Link to="/signup">
            <Button>signup</Button>
          </Link>
          <Link to="/login">
            <Button>login</Button>
          </Link>
        </>
      )}
      <MenuButton onClick={toggleShowMenu}>
        <MenuImg src={menu} alt="" />
      </MenuButton>
      {showDropdownMenu && <DropdownMenu email={email} />}
      <button>
        <Figure>
          <CartImg src={cart} alt="" />
          <span></span>
        </Figure>
      </button>
    </Container>
  );
};

export { Menu };
