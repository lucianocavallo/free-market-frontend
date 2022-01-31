import {
  Container,
  ProductsContainer,
  Div,
  CloseImg,
  DivInfo,
  Total,
} from "./styles";
import closeImg from "../../assets/icons/close_cross.svg";
import { Link } from "react-router-dom";

const Cart: React.FC<CartProps> = ({
  cart,
  removeFromCart,
  toggleShowCart,
}) => {
  const handleRemoveFromCart = (product: Product) => {
    removeFromCart && removeFromCart(product);
  };

  return (
    <Container>
      <h2>Cart</h2>
      <ProductsContainer>
        {cart &&
          cart.map((product) => (
            <Div key={product._id}>
              <img src={product.image} alt={product.name} />
              <DivInfo>
                <p>{product.name}</p>
                <p>${product.price}</p>
              </DivInfo>
              <button onClick={() => handleRemoveFromCart(product)}>
                <CloseImg src={closeImg} alt="close arrow" />
              </button>
            </Div>
          ))}
      </ProductsContainer>
      <Total>
        <span>
          <span>Total: $</span>
          <span>
            {cart &&
              //@ts-ignore
              cart.reduce((accum, product) => product.price + accum, 0)}
          </span>
        </span>
        <button onClick={toggleShowCart}>
          <Link to="checkout">Go to checkout</Link>
        </button>
      </Total>
    </Container>
  );
};

export { Cart };
