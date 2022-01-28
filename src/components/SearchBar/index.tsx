import searchIcon from "../../assets/icons/search.svg";
import { Categories } from "../Categories";
import { Container, Input, Img, LineDiv } from "./styles";

const SearchBar: React.FC = () => {
  return (
    <div>
      <Container>
        <Input type="text" placeholder="Search products..." />
        <LineDiv />
        <figure>
          <Img src={searchIcon} alt="" />
        </figure>
      </Container>
      <Categories />
    </div>
  );
};

export { SearchBar };
