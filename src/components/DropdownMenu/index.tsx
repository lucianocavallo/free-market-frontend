import { Container } from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../../context/context";
import { useContext } from "react";

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  email,
  toggleShowMenu,
}) => {
  const { setFilter, logout } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout && logout();
    toggleShowMenu();
  };

  const handleFilter = (category: string) => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setFilter && setFilter(category);
    toggleShowMenu();
    console.log("toggle");
  };

  return (
    <Container>
      <ul>
        {!email && (
          <>
            <li>
              <button onClick={toggleShowMenu}>
                <Link to="/signup">Signup</Link>
              </button>
            </li>
            <li>
              <button onClick={toggleShowMenu}>
                <Link to="/login">Login</Link>
              </button>
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
