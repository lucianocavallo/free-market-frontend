import styled from "styled-components";
import vars from "../../styles/vars";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgba(255, 0, 0, 0.5);
  padding: 10px 2px 7px;
  border-radius: 8px;
  & p {
    color: ${vars.pr_white};
    font-size: 29px;
    line-height: 15px;
    text-align: center;
  }
`;

export { Container };
