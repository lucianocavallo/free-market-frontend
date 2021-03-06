import styled from "styled-components";
import vars from "../../styles/vars";
import { Link as RouterLink } from "react-router-dom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  & h2 {
    font-size: 40px;
    text-align: center;
    color: ${vars.pr_gray};
  }

  & h2:nth-child(1) {
    color: ${vars.pr_blue};
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
  border: 1px solid transparent;
  &.error {
    border: 1px solid rgba(255, 0, 0, 0.2);
  }
`;

const Link = styled(RouterLink)`
  display: block;
  font-size: 28px;
  line-height: 10px;
  text-align: center;
  margin-top: 22px;
  color: ${vars.pr_blue};
`;

export { Form, Input, Link };
