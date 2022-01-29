import styled from "styled-components";
import vars from "../../styles/vars";

const Container = styled.div`
  width: 100%;
  background-color: ${vars.pr_yellow};
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Nav = styled.nav`
  width: 100%;
  justify-content: center;
  display: flex;
  margin: 15px 0;
  @media (max-width: 600px) {
    width: 90%;
    max-width: 280px;
    justify-content: space-between;
    margin: 15px auto;
  }
`;

export { Container, Nav };
