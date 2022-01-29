import { Container } from "./styles";

const Error: React.FC<ErrorMsg> = ({ error }) => {
  return (
    <Container>
      <p>{error}</p>
    </Container>
  );
};

export { Error };
