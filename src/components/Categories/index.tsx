import { useLocation, useNavigate } from "react-router-dom";
import { Container, Span, Button, Ul } from "./styles";
// import arrow from "../../assets/icons/arrow_down.svg";

const Categories: React.FC<AppContext> = ({ setFilter }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleFilter = (category: string) => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setFilter && setFilter(category);
  };
  return (
    <Container>
      <Ul>
        <li>
          <Button onClick={() => handleFilter("")}>
            <Span>All</Span>
          </Button>
        </li>
        <li>
          <Button onClick={() => handleFilter("clothes")}>
            <Span>Clothes</Span>
          </Button>
        </li>
        <li>
          <Button onClick={() => handleFilter("electronics")}>
            <Span>Electronics</Span>
          </Button>
        </li>
        <li>
          <Button onClick={() => handleFilter("furniture")}>
            <Span>Furniture</Span>
          </Button>
        </li>
        <li>
          <Button onClick={() => handleFilter("toys")}>
            <Span>Toys</Span>
          </Button>
        </li>
      </Ul>
    </Container>
  );
};

export { Categories };
