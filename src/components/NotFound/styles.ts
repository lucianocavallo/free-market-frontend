import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  display: grid;
  place-content: center;
  place-items: center;
  & h1 {
    max-width: 360px;
    text-align: center;
  }
  & img {
    width: 300px;
  }
`;

export { Container };
