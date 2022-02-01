import { useEffect, useContext, useState } from "react";
import { Context } from "../../context/context";
import { Container, Div, MessageDiv } from "./styles";
import { ProductCard } from "../ProductCard";
import { Loading } from "../Loading";
import { filterByCategory } from "../../utils/filterProducts";
import { SecondaryButton } from "../SecondaryButton";

const ProductsList = () => {
  const appContext = useContext(Context);
  const { user, filter, addProducts, offset, setOffset } = appContext;
  const products = appContext.products as Product[];
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!products?.length) {
      setLoading(true);
      const url = `${process.env.API_URL}/products?limit=8&offset=0`;
      (async () => {
        const res = await fetch(url);
        const data = await res.json();
        addProducts && addProducts(data);
        setOffset && offset && setOffset(offset + 8);
        setLoading(false);
      })();
    }
  }, []);

  const handleLoadMore = async () => {
    if (offset) {
      if (offset > 32) return;
      setLoading(true);
      const url = `${process.env.API_URL}/products?limit=8&offset=${offset}`;
      const res = await fetch(url);
      const data = await res.json();
      addProducts && addProducts(data);
      setOffset && setOffset(offset + 8);
      setLoading(false);
    }
  };

  return (
    <Container>
      {!user && (
        <MessageDiv>
          <h2>login or create an account to start shopping</h2>
        </MessageDiv>
      )}
      <Div>
        {!filter &&
          products.map((product) => (
            <ProductCard {...product} key={product._id} />
          ))}
        {filter && filterByCategory(products, ProductCard, filter)}
      </Div>
      {loading && <Loading />}
      <SecondaryButton
        onClick={handleLoadMore}
        className="load-more"
        disabled={offset ? offset > 32 : false}
      >
        Load more items
      </SecondaryButton>
    </Container>
  );
};

export { ProductsList };
