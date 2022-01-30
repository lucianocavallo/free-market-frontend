import { Container } from "./styles";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";
import { useContext } from "react";

const DropdownMenu: React.FC<User> = ({ email }) => {
  const { setUser } = useContext(Context);

  const handleLogout = () => {
    if (setUser !== undefined) {
      setUser(undefined);
    }
  };

  return (
    <Container>
      <ul>
        {!email && (
          <>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
        {email && (
          <>
            <li>
              <Link to="/user">My Account</Link>
            </li>
            <li>
              <div />
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </Container>
  );
};

export { DropdownMenu };
