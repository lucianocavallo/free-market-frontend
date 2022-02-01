import styled from "styled-components";
import vars from "../../styles/vars";

const Container = styled.div`
  position: relative;
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
    width: 100%;
    max-width: 300px;
    justify-content: space-between;
    margin: 15px auto;
  }
`;

const MessageDiv = styled.div`
  position: absolute;
  bottom: -33px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0 20px;
  & h2 {
    margin: 0 20px;
    font-size: 20px;
    text-align: center;
    background: ${vars.pr_white};
    color: ${vars.pr_blue};
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.09);
    border: 1px solid ${vars.pr_blue};
    border-radius: 16px;
    padding: 5px 15px 2px;
    line-height: 20px;
  }
`;

export { Container, Nav, MessageDiv };
