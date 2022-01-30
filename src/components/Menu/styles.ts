import styled from "styled-components";
import vars from "../../styles/vars";

const Container = styled.div`
  position: relative;
  display: inline-flex;
  margin-left: 10px;
  align-items: center;
  @media (max-width: 600px) {
    margin-left: 0px;
  }
`;

const EmailButton = styled.p`
  font-size: 30px;
  margin-right: 8px;
  color: ${vars.pr_blue};
  max-width: 190px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${vars.sc_gray};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${vars.pr_blue};
  }
  @media (max-width: 600px) {
    font-size: 25px;
    max-width: 170px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Button = styled.button`
  font-size: 30px;
  margin-right: 8px;
  color: ${vars.pr_blue};
  @media (max-width: 600px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  @media (max-width: 600px) {
    display: flex;
  }
`;

const MenuImg = styled.img`
  margin-right: 12px;
  margin-top: 3px;
  width: 30px;
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
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    background: ${vars.pr_blue};
    color: ${vars.pr_white};
    font-size: 20px;
    padding-top: 2px;
    padding-left: 1px;
  }
  @media (max-width: 600px) {
    margin-top: 10px;
  }
`;

export { Container, MenuImg, MenuButton, CartImg, Button, Figure, EmailButton };
