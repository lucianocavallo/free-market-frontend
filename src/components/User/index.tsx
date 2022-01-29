import { useContext } from "react";
import { Container, SubContainer, Div } from "./styles";
import { Context } from "../../context/context";
import { PrimaryButton } from "../PrimaryButton";

const User: React.FC = () => {
  const { user, setUser } = useContext(Context);

  const handleLogOut = () => {
    if (setUser !== undefined) {
      setUser(undefined);
    }
  };

  return (
    <Container>
      <SubContainer>
        <Div>
          <h2>Hello: </h2>
          <h2> {user?.email}</h2>
          <p>Your order: </p>
        </Div>
        <PrimaryButton onClick={handleLogOut}>Logout</PrimaryButton>
      </SubContainer>
    </Container>
  );
};

export { User };
