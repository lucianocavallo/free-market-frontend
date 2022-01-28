import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 245px));
  place-content: center;
  gap: 10px;
`;

export { Container, CardsContainer };
