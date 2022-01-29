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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  & h2 {
    font-size: 40px;
    text-align: center;
    color: ${vars.pr_gray};
  }

  & label {
    color: ${vars.pr_gray};
    font-size: 30px;
    line-height: 30px;
  }
`;

const Input = styled.input`
  height: 40px;
  padding-left: 8px;
  margin-bottom: 10px;
  font-size: 16px;
  box-shadow: 0px 0px 12px 4px rgba(0, 0, 0, 0.18);
  &.error {
    background: red;
    opacity: 0.2;
  }
  &.error &:after {
    content: "an error ocurred";
    background: red;
    border: 1px solid red;
    font-size: 40px;
  }
  &.error &:before {
    content: "an error ocurred";
    background: red;
    border: 1px solid red;
    font-size: 40px;
  }
`;

export { Container, SubContainer, Form, Input };
