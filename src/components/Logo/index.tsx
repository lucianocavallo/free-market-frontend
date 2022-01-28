import logo from "../../assets/img/logo.svg";
import { Img, Figure } from "./styles";

const Logo = () => (
  <Figure>
    <Img src={logo} alt="" />
  </Figure>
);

export { Logo };
