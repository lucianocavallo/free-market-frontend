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

  const handleGoToProducts = () => {
    navigate("/");
  };

  const handleRemoveFromCart = (product: Product) => {
    removeFromCart && removeFromCart(product);
  };

  const handlePayment = async () => {
    const uri = `${process.env.API_URL}/customers/by-user-id/${user?.userId}`;
    const res = await fetch(uri);
    const data = await res.json();
    const customerId = data._id;
    const products = cart?.map((product) => product._id);

    const res2 = await fetch(`${process.env.API_URL}/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user?.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer: customerId,
        products,
      }),
    });
    console.log("res2", res2);
    const data2 = await res2.json();
    console.log("data2", data2);
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
                    <CloseImg src={closeImg} alt="close arrow" />
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
        <PrimaryButton onClick={handlePayment}>
          Proceed to payment
        </PrimaryButton>
        <SecondaryButton onClick={handleGoToProducts}>
          Continue shopping
        </SecondaryButton>
      </SubContainer>
    </Container>
  );
};

export { Checkout };
