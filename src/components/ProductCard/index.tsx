import { Container, Info } from "./styles";
import addToCartImg from "../../assets/icons/add_to_cart.svg";
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../context/context";

const ProductCard: React.FC<Product> = ({
  _id,
  category,
  name,
  price,
  image,
}) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const { user, cart, addToCart } = useContext(Context);

  useEffect(() => {
    const index = cart?.findIndex((product) => product._id === _id);
    if (index === -1) {
      setAddedToCart(false);
    } else {
      setAddedToCart(true);
    }
  }, [cart]);

  const handleAddToCart = async () => {
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
        <img src={image} alt={name} />
      </figure>
      <Info>
        <h2>${price}</h2>
        <p>{name}</p>
        {user && (
          <button onClick={handleAddToCart} disabled={addedToCart}>
            <img src={addToCartImg} alt="add to cart image" />
          </button>
        )}
      </Info>
    </Container>
  );
};

export { ProductCard };
