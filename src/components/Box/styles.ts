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

export { Container, SubContainer };
