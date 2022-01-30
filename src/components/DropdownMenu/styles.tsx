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
  & li a,
  button {
    font-size: 30px;
    color: #313131;
    line-height: 35px;
  }
  & div {
    border-top: 1px solid ${vars.pr_gray};
    margin-top: 5px;
  }
  & li button {
    margin-top: 10px;
    color: ${vars.pr_blue};
  }
`;

export { Container };
