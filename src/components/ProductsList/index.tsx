import { Container, Div, Button } from "./styles";
import { ProductCard } from "../ProductCard";

const ProductsList = () => {
  return (
    <Container>
      <Div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Div>
      <Button>Load more items</Button>
    </Container>
  );
};

export { ProductsList };
