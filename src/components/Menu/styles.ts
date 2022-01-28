import styled from "styled-components";
import vars from "../../styles/vars";

const Container = styled.div`
  display: inline-flex;
  margin-left: 20px;
  align-items: center;
`;

const Button = styled.button`
  font-size: 30px;
  margin-right: 10px;
  color: ${vars.pr_gray};
  @media (max-width: 600px) {
    display: none;
  }
`;

const MenuImg = styled.img`
  width: 30px;
  display: none;
  margin-right: 15px;
  margin-bottom: 5px;
  @media (max-width: 600px) {
    display: inline-block;
  }
`;

const CartImg = styled.img`
  width: 30px;
`;

const Figure = styled.figure`
  position: relative;
  & span {
    position: absolute;
    top: -5px;
    right: -5px;
    border-radius: 50%;
    display: inline-block;
    width: 18px;
    height: 18px;
    background: ${vars.pr_red};
    color: ${vars.pr_white};
    font-size: 20px;
    line-height: 22px;
    text-align: center;
  }
`;

export { Container, MenuImg, CartImg, Button, Figure };
