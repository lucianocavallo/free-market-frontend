import { Container, SubContainer } from "./styles";

const Box: React.FC = ({ children }) => (
  <Container>
    <SubContainer>{children}</SubContainer>
  </Container>
);

export { Box };
