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

export { Container, Div };
