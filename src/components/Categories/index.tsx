import { useLocation, useNavigate } from "react-router-dom";
import { Container, Span, Button, Ul } from "./styles";

const Categories: React.FC<AppContext> = ({ setFilter, filter }) => {
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
          <Button
            onClick={() => handleFilter("")}
            className={!filter ? "active" : ""}
          >
            <Span>All</Span>
          </Button>
        </li>
        <li>
          <Button
            onClick={() => handleFilter("clothes")}
            className={filter === "clothes" ? "active" : ""}
          >
            <Span>Clothes</Span>
          </Button>
        </li>
        <li>
          <Button
            onClick={() => handleFilter("electronics")}
            className={filter === "electronics" ? "active" : ""}
          >
            <Span>Electronics</Span>
          </Button>
        </li>
        <li>
          <Button
            onClick={() => handleFilter("furniture")}
            className={filter === "furniture" ? "active" : ""}
          >
            <Span>Furniture</Span>
          </Button>
        </li>
        <li>
          <Button
            onClick={() => handleFilter("toys")}
            className={filter === "toys" ? "active" : ""}
          >
            <Span>Toys</Span>
          </Button>
        </li>
      </Ul>
    </Container>
  );
};

export { Categories };
