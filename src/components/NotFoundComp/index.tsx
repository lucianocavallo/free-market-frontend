import { Container } from "./styles";
import notFoundImg from "../../assets/img/404_not_found.png";

const NotFoundComp = () => (
  <Container>
    <h1>The page you're looking for Not Found</h1>
    <img src={notFoundImg} alt="" />
  </Container>
);

export { NotFoundComp };
