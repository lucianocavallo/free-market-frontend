import { Container, CardsContainer } from "./styles";
import { ProductCard } from "../ProductCard";

const ProductsList = () => {
  return (
    <Container>
      <h1>Products List</h1>
      <CardsContainer>
        <ProductCard />
        <ProductCard />
      </CardsContainer>
    </Container>
  );
};

export { ProductsList };
