import { Container, Span, Button, Ul } from "./styles";
// import arrow from "../../assets/icons/arrow_down.svg";

const Categories = () => {
  return (
    <Container>
      <Ul>
        <li>
          <Button>
            <Span>All</Span>
          </Button>
        </li>
        <li>
          <Button>
            <Span>Clothes</Span>
          </Button>
        </li>
        <li>
          <Button>
            <Span>Electronics</Span>
          </Button>
        </li>
        <li>
          <Button>
            <Span>Furniture</Span>
          </Button>
        </li>
        <li>
          <Button>
            <Span>Toys</Span>
          </Button>
        </li>
        <li>
          <Button>
            <Span>Others</Span>
          </Button>
        </li>
      </Ul>
    </Container>
  );
};

export { Categories };
