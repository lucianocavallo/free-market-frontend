import { Container } from "./styles";
import notFoundImg from "../../assets/img/404_not_found.png";

const NotFound = () => (
  <Container>
    <h1>πΆβπ«οΈ Sorry, we couldn't find the page you're looking for πΆβπ«οΈ</h1>
    <img src={notFoundImg} alt="not found image" />
  </Container>
);

export { NotFound };
