import { ProductsList } from "../components/ProductsList";
import Helmet from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Free Market 🛒 - Your closest e-store</title>
        <meta
          name="description"
          content="With Free Market your products are just one click away"
        />
      </Helmet>
      <ProductsList />
    </>
  );
};

export { HomePage };
