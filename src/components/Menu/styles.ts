import styled from "styled-components";
import vars from "../../styles/vars";

const Container = styled.div`
  display: inline-flex;
  margin-left: 10px;
  align-items: center;
`;

const Button = styled.button`
  font-size: 30px;
  margin-right: 8px;
  color: ${vars.pr_blue};
  @media (max-width: 600px) {
    display: none;
  }
`;

const MenuImg = styled.img`
  width: 30px;
  display: none;
  margin-right: 15px;
  margin-top: 3px;
  @media (max-width: 600px) {
    display: inline-block;
  }
`;

const CartImg = styled.img`
  width: 30px;
`;

const Figure = styled.figure`
  position: relative;
  margin-top: 3px;
  & span {
    position: absolute;
    top: -5px;
    right: -5px;
    border-radius: 50%;
    display: inline-block;
    width: 16px;
    height: 16px;
    background: ${vars.pr_blue};
    color: ${vars.pr_white};
    font-size: 20px;
    line-height: 22px;
    text-align: center;
  }
  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;

export { Container, MenuImg, CartImg, Button, Figure };
