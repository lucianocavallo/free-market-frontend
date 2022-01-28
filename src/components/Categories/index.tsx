import { Container, Span, Img, Button } from "./styles";
import arrow from "../../assets/icons/arrow_down.svg";

const Categories = () => {
  return (
    <Container>
      <Button>
        <Span>categories</Span>
        <Img src={arrow} alt="" />
      </Button>
    </Container>
  );
};

export { Categories };
