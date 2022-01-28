import logo from "../../assets/img/logo.svg";
import mini_logo from "../../assets/img/mini_logo.svg";
import { LogoImg, Figure, MiniLogoImg } from "./styles";

const Logo = () => (
  <Figure>
    <LogoImg src={logo} alt="logo" />
    <MiniLogoImg src={mini_logo} alt="logo" />
  </Figure>
);

export { Logo };
