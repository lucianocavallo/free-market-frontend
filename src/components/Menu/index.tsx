import { useState } from "react";
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
import cartImg from "../../assets/icons/cart.svg";
import menu from "../../assets/icons/menu.svg";
import { DropdownMenu } from "../DropdownMenu";
import { Cart } from "../Cart";
import { useContext } from "react";
import { Context } from "../../context/context";

const Menu: React.FC<User> = ({ email }) => {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cart, removeFromCart } = useContext(Context);

  const toggleShowMenu = () => setShowDropdownMenu(!showDropdownMenu);

  const toggleShowCart = () => {
    setShowCart(!showCart);
  };
  return (
    <Container>
      {email && (
        <Link to="/user">
          <EmailButton>{email}</EmailButton>
        </Link>
      )}
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
      {showDropdownMenu && (
        <DropdownMenu toggleShowMenu={toggleShowMenu} email={email} />
      )}
      <button onClick={toggleShowCart}>
        <Figure>
          <CartImg src={cartImg} alt="" />
          <span>{cart && cart.length}</span>
        </Figure>
      </button>
      {showCart && (
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          toggleShowCart={toggleShowCart}
        />
      )}
    </Container>
  );
};

export { Menu };
