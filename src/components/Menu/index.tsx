import cart from "../../assets/icons/cart.svg";
import menu from "../../assets/icons/menu.svg";
import { Link } from "react-router-dom";
import { Container, CartImg, Button, MenuImg, Figure } from "./styles";

const Menu: React.FC<User> = ({ email }) => {
  return (
    <Container>
      {email && <Button>{email}</Button>}
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
