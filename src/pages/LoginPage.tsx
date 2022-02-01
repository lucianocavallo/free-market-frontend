import { Login } from "../components/Login";
import Helmet from "react-helmet";
const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Free Market 🛒 - Login and start shopping</title>
        <meta
          name="description"
          content="Login to Free Market to start shopping"
        />
      </Helmet>
      <Login />
    </>
  );
};

export { LoginPage };
