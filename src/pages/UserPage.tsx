import { User } from "../components/User";
import Helmet from "react-helmet";

const UserPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Free Market 🛒 - Wellcome! You can start shopping</title>
        <meta name="description" content="Free Market logged user" />
      </Helmet>
      <User />
    </>
  );
};

export { UserPage };
