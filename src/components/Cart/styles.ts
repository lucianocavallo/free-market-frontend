import styled from "styled-components";
import vars from "../../styles/vars";

const Container = styled.div`
  position: absolute;
  top: 50px;
  right: -20px;
  width: 360px;
  background: white;
  border: 1px solid ${vars.pr_gray};
  z-index: 1;
  border-radius: 16px;
  background: ${vars.pr_white};
  border-radius: 16px;
  padding: 10px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.09);
  & h2 {
    font-size: 30px;
    margin-left: 10px;
  }
`;

const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${vars.pr_gray};
`;

const Div = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  min-height: 75px;
  margin-bottom: 5px;
  & img {
    width: 50px;
    max-height: 80px;
    object-fit: contain;
  }
`;

const DivInfo = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  & p {
    font-size: 26px;
  }
`;

const CloseImg = styled.img`
  display: inline-block;
  width: 15px;
  height: 15px;
  color: red;
  margin-top: 4px;
`;

const Total = styled.p`
  font-size: 35px;
  margin-top: 10px;
  margin-left: 10px;
`;

export { Container, ProductsContainer, Div, CloseImg, DivInfo, Total };
