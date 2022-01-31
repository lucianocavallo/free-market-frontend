import { Container } from "./styles";
import notFoundImg from "../../assets/img/404_not_found.png";

const NotFound = () => (
  <Container>
    <h1>😶‍🌫️ Sorry, we couldn't find the page you're looking for 😶‍🌫️</h1>
    <img src={notFoundImg} alt="" />
  </Container>
);

export { NotFound };
