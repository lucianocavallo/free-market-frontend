import cart from "../../assets/icons/cart.svg";
import { Container, CartImg, Button } from "./styles";

const HeaderButtons = () => {
  return (
    <Container>
      <Button>signup</Button>
      <Button>login</Button>
      <button>
        <figure>
          <CartImg src={cart} alt="" />
        </figure>
      </button>
    </Container>
  );
};

export { HeaderButtons };
