import styled from "styled-components";
import vars from "../../styles/vars";

const Container = styled.div`
  text-align: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  margin-left: 5px;
  /* position: relative; */
`;

const Span = styled.span`
  line-height: 40px;
  color: ${vars.sc_gray};
  font-size: 30px;
  margin-right: 8px;
`;

const Img = styled.img`
  width: 15px;
`;

export { Container, Span, Img, Button };
