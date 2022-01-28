import styled from "styled-components";

const Figure = styled.figure``;

const LogoImg = styled.img`
  width: 200px;
  margin-right: 20px;
  @media (max-width: 920px) {
    display: none;
  }
`;

const MiniLogoImg = styled.img`
  width: 55px;
  margin-right: 20px;
  display: none;
  @media (max-width: 920px) {
    display: block;
    margin-right: 5px;
  }
  @media (max-width: 600px) {
    width: 45px;
  }
`;

export { LogoImg, Figure, MiniLogoImg };
