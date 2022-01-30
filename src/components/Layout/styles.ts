import styled from "styled-components";
import vars from "../../styles/vars";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${vars.bg};
  padding-bottom: 0px;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 25px;
  color: black;
`;

export { Container, Footer };
