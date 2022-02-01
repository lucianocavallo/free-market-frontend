import searchIcon from "../../assets/icons/search.svg";
import { Container, SubContainer, Input, Img, LineDiv } from "./styles";

const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  return (
    <Container>
      <SubContainer>
        <Input
          type="text"
          placeholder="Search products..."
          onChange={onChange}
        />
        <LineDiv />
        <figure>
          <Img src={searchIcon} alt="search icon" />
        </figure>
      </SubContainer>
    </Container>
  );
};

export { SearchBar };
