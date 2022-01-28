import cart from "../../assets/icons/cart.svg";
import menu from "../../assets/icons/menu.svg";
import { Container, CartImg, Button, MenuImg } from "./styles";

const Menu = () => {
  return (
    <Container>
      <Button>signup</Button>
      <Button>login</Button>
      <MenuImg src={menu} alt="" />
      <button>
        <figure>
          <CartImg src={cart} alt="" />
        </figure>
      </button>
    </Container>
  );
};

export { Menu };
