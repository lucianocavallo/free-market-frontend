import styled from "styled-components";
import vars from "../../styles/vars";

const Button = styled.button`
  width: 100%;
  background: ${vars.pr_blue};
  padding: 5px 0 3px;
  font-size: 30px;
  line-height: 40px;
  color: ${vars.pr_white};
  border-radius: 12px;
  margin-top: 20px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid ${vars.pr_blue};
    font-weight: 700;
    background: ${vars.pr_white};
    color: ${vars.pr_blue};
  }
  &[disabled] {
    opacity: 0.2;
  }
`;

export { Button };
