import { Checkout } from "../components/Checkout";
import Helmet from "react-helmet";

const CheckoutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Free Market 🛒 - Checkout</title>
        <meta
          name="description"
          content="Here's your order, check your products, and proceed to payment"
        />
      </Helmet>
      <Checkout />
    </>
  );
};

export { CheckoutPage };
