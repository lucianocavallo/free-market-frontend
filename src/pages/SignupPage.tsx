import { Signup } from "../components/SignUp";
import Helmet from "react-helmet";

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>Free Market 🛒 - Create your account</title>
        <meta name="description" content="Create your account in Free Market" />
      </Helmet>
      <Signup />
    </>
  );
};

export default SignUpPage;
