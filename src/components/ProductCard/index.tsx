import { Container, Info } from "./styles";
import addToCartImg from "../../assets/icons/add_to_cart.svg";
import React, { useState, useContext } from "react";
import { Context } from "../../context/context";

const ProductCard: React.FC<Product> = ({
  _id,
  category,
  name,
  price,
  image,
}) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useContext(Context);

  const handleAddToCart = async () => {
    setAddedToCart(true);
    const product: Product = {
      _id,
      category,
      name,
      price,
      image,
    };
    addToCart && addToCart(product);
  };

  return (
    <Container>
      <figure>
        <img src={image} alt="" />
      </figure>
      <Info>
        <h2>${price}</h2>
        <p>{name}</p>
        <button onClick={handleAddToCart} disabled={addedToCart}>
          <img src={addToCartImg} alt="" />
        </button>
      </Info>
    </Container>
  );
};

export { ProductCard };
