import styled from "styled-components";

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

const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 30px;
  margin: 20px auto 0;
  padding: 16px 10px 12px;
  line-height: 10px;
  background: lightblue;
  border-radius: 8px;
`;

export { Container, Div, Button };
