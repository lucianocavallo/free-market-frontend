import { Container } from "./styles";
import { ProductCard } from "../ProductCard";

const ProductsList = () => {
  return (
    <Container>
      <div>
        <ProductCard />
        <ProductCard />
      </div>
    </Container>
  );
};

export { ProductsList };
