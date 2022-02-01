import styled from "styled-components";
import vars from "../../styles/vars";

const Container = styled.div`
  width: 100%;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 245px));
  place-content: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 10px;
`;

const MessageDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0 20px;
  & h2 {
    margin: 0 20px;
    font-size: 22px;
    text-align: center;
    background: ${vars.pr_white};
    color: ${vars.sc_blue};
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.09);
    border-radius: 12px;
    padding: 6px 15px 4px;
    line-height: 20px;
  }
`;

export { Container, Div, MessageDiv };
