import { useContext } from "react";
import { Container, SubContainer, Div } from "./styles";
import { Context } from "../../context/context";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";
import { useNavigate } from "react-router-dom";

const User: React.FC = () => {
  const { user, setUser } = useContext(Context);
  const navigate = useNavigate();
  const handleLogOut = () => {
    if (setUser !== undefined) {
      setUser(undefined);
    }
  };

  const handleGoToProducts = () => {
    navigate("/");
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
        <SecondaryButton onClick={handleGoToProducts}>
          Go to products
        </SecondaryButton>
      </SubContainer>
    </Container>
  );
};

export { User };
