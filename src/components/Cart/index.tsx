import {
  Container,
  ProductsContainer,
  Div,
  CloseImg,
  DivInfo,
  Total,
} from "./styles";
import closeImg from "../../assets/icons/close_cross.svg";

const Cart: React.FC<AppContext> = ({ cart, removeFromCart }) => {
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
                <CloseImg src={closeImg} alt="" />
              </button>
            </Div>
          ))}
      </ProductsContainer>
      <Total>
        <span>Total: $</span>
        {cart &&
          //@ts-ignore
          cart.reduce((accum, product) => product.price + accum, 0)}
      </Total>
    </Container>
  );
};

export { Cart };