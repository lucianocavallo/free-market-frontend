import { Container, Info } from "./styles";
import bike from "../../assets/img/bike_img.png";
// import bike from "../../assets/img/cellphone.png";
import addToCart from "../../assets/icons/add_to_cart.svg";

const ProductCard = () => {
  return (
    <Container>
      <figure>
        <img src={bike} alt="" />
      </figure>
      <Info>
        <h2>$500</h2>
        <p>Mountain Bike</p>
        <img src={addToCart} alt="" />
      </Info>
    </Container>
  );
};

export { ProductCard };
