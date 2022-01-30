import styled, { keyframes } from "styled-components";
import vars from "../../styles/vars";

const Container = styled.div`
  position: absolute;
  min-width: 150px;
  background: ${vars.pr_white};
  top: 50px;
  right: 0;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 10px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.09);
  text-align: right;
  z-index: 1;
  border: 1px solid ${vars.pr_gray};
  & li a,
  button {
    font-size: 30px;
    color: #313131;
    line-height: 35px;
  }
  & div {
    border-top: 1px solid ${vars.sc_gray};
    margin-top: 5px;
  }
  & li button {
    margin-top: 10px;
    color: ${vars.pr_blue};
  }
  & li details {
    margin-top: 5px;
    color: #313131;
    display: flex;
    flex-direction: column;
  }
  & li details summary {
    color: ${vars.pr_gray};
    font-size: 30px;
    line-height: 35px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  & li details button {
    margin: 0;
    font-size: 25px;
    line-height: 30px;
    width: 100%;
    text-align: right;
  }
`;

export { Container };
