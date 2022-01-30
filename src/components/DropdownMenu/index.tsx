import { Container } from "./styles";
import { Link } from "react-router-dom";
import { Context } from "../../context/context";
import { useContext } from "react";

const DropdownMenu: React.FC<User> = ({ email }) => {
  const { setUser, setFilter } = useContext(Context);

  const handleLogout = () => {
    if (setUser !== undefined) {
      setUser(undefined);
    }
  };

  const handleFilter = (category: string) => {
    setFilter && setFilter(category);
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
        <li>
          <div />
          <details>
            <summary>Categories</summary>
            <button onClick={() => handleFilter("")}>All</button>
            <button onClick={() => handleFilter("clothes")}>Clothes</button>
            <button onClick={() => handleFilter("electronics")}>
              Electronics
            </button>
            <button onClick={() => handleFilter("furniture")}>Furniture</button>
            <button onClick={() => handleFilter("toys")}>Toys</button>
          </details>
        </li>
      </ul>
    </Container>
  );
};

export { DropdownMenu };
