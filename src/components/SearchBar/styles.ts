import styled from "styled-components";
import vars from "../../styles/vars";

const Container = styled.div`
  display: inline-flex;
  width: 600px;
  height: 40px;
  margin-top: 2px;
  background: ${vars.pr_white};
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
  padding: 0 0 0 15px;
  @media (max-width: 768px) {
  }
`;

const Input = styled.input`
  display: block;
  flex-grow: 1;
  width: 100%;
`;

const LineDiv = styled.div`
  width: 1px;
  height: 70%;
  border-right: 2px solid ${vars.sc_gray};
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin: 14px 10px 5px;
`;

export { Container, Input, Img, LineDiv };
