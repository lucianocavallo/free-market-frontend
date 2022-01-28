import styled from "styled-components";
import vars from "../../styles/vars";

const Container = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
  & li {
    display: flex;
    align-items: center;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const Span = styled.span`
  line-height: 20px;
  color: ${vars.sc_gray};
  font-size: 30px;
  margin-right: 2px;
  @media (max-width: 920px) {
    font-size: 28px;
  }
`;

const Img = styled.img`
  width: 15px;
  @media (max-width: 920px) {
    width: 12px;
  }
`;

export { Container, Span, Img, Button, Ul };
