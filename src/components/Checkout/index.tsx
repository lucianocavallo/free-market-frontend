import { useContext } from "react";
import {
  Container,
  SubContainer,
  MainDiv,
  ProductsContainer,
  Div,
  DivInfo,
  CloseImg,
  Total,
} from "./styles";
import { Context } from "../../context/context";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";
import { useNavigate } from "react-router-dom";
import closeImg from "../../assets/icons/close_cross.svg";

const Checkout: React.FC = () => {
  const { cart, user, logout, removeFromCart } = useContext(Context);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logout && logout();
  };

  const handleGoToProducts = () => {
    navigate("/");
  };

  const handleRemoveFromCart = (product: Product) => {
    removeFromCart && removeFromCart(product);
  };

  return (
    <Container>
      <SubContainer>
        <MainDiv>
          <h2>Checkout</h2>
          <h2> {user?.email}</h2>
          <p>Your order: </p>
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
        </MainDiv>
        <PrimaryButton onClick={handleLogOut}>Proceed to payment</PrimaryButton>
        <SecondaryButton onClick={handleGoToProducts}>
          Continue shopping
        </SecondaryButton>
      </SubContainer>
    </Container>
  );
};

export { Checkout };
