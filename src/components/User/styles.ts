import styled from "styled-components";
import vars from "../../styles/vars";

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

  & p {
    color: ${vars.pr_gray};
    font-size: 30px;
    line-height: 30px;
  }
`;

export { MainDiv };
