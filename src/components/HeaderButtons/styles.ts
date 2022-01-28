import styled from "styled-components";
import vars from "../../styles/vars";

const Container = styled.div`
  display: inline-flex;
  margin-left: 20px;
  /* height: 50px; */
`;

const Button = styled.button`
  font-size: 30px;
  margin-right: 10px;
  color: ${vars.pr_gray};
`;

const CartImg = styled.img`
  width: 30px;
`;

export { Container, CartImg, Button };
