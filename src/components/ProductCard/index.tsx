import { Container, Info } from "./styles";
import addToCart from "../../assets/icons/add_to_cart.svg";
import React from "react";

const ProductCard: React.FC<Product> = ({ name, price, image }) => {
  return (
    <Container>
      <figure>
        <img src={image} alt="" />
      </figure>
      <Info>
        <h2>${price}</h2>
        <p>{name}</p>
        <img src={addToCart} alt="" />
      </Info>
    </Container>
  );
};

export { ProductCard };
