import styled from "styled-components";
import vars from "../../styles/vars";

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 95px);
  display: grid;
  place-items: center;
`;

const SubContainer = styled.div`
  padding: 20px;
  width: 100%;
  max-width: 360px;
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background: ${vars.pr_white};
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & h2 {
    font-size: 35px;
    word-break: break-all;
    text-align: center;
    color: ${vars.pr_gray};
  }
  & h2:nth-child(1) {
    color: ${vars.pr_blue};
  }

  & p {
    color: ${vars.pr_gray};
    font-size: 30px;
    line-height: 30px;
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

export {
  Container,
  SubContainer,
  MainDiv,
  Div,
  DivInfo,
  ProductsContainer,
  CloseImg,
  Total,
};
