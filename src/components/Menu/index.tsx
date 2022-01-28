import cart from "../../assets/icons/cart.svg";
import menu from "../../assets/icons/menu.svg";
import { Container, CartImg, Button, MenuImg, Figure } from "./styles";

const Menu = () => {
  return (
    <Container>
      <Button>signup</Button>
      <Button>login</Button>
      <MenuImg src={menu} alt="" />
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
