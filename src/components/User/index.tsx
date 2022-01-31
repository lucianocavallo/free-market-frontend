import { useContext } from "react";
import { Context } from "../../context/context";
import { MainDiv } from "./styles";

import { Box } from "../Box";
import { PrimaryButton } from "../PrimaryButton";
import { SecondaryButton } from "../SecondaryButton";
import { useNavigate } from "react-router-dom";

const User: React.FC = () => {
  const { user, logout } = useContext(Context);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logout && logout();
  };

  const handleGoToProducts = () => {
    navigate("/");
  };

  return (
    <Box>
      <MainDiv>
        <h2>Hello: </h2>
        <h2> {user?.email}</h2>
      </MainDiv>
      <PrimaryButton onClick={handleLogOut}>Logout</PrimaryButton>
      <SecondaryButton onClick={handleGoToProducts}>
        Go to products
      </SecondaryButton>
    </Box>
  );
};

export { User };
