import logo from "../../assets/img/logo.svg";
import mini_logo from "../../assets/img/mini_logo.svg";
import { LogoImg, Figure, MiniLogoImg } from "./styles";
import { Link } from "react-router-dom";

const Logo = () => (
  <Figure>
    <Link to="/">
      <LogoImg src={logo} alt="logo" />
      <MiniLogoImg src={mini_logo} alt="logo" />
    </Link>
  </Figure>
);

export { Logo };
