import { useEffect, useContext, useState } from "react";
import { Context } from "../../context/context";
import { Container, Div } from "./styles";
import { ProductCard } from "../ProductCard";
import { Loading } from "../Loading";
import { filterByCategory } from "../../utils/filterProducts";
import { SecondaryButton } from "../SecondaryButton";

const ProductsList = () => {
  const { products, filter, addProducts } = useContext(Context);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `${process.env.API_URL}/products?limit=8&offset=${offset}`;
    (async () => {
      const res = await fetch(url);
      const data = await res.json();
      const reversedData = data.reverse();
      addProducts && addProducts(reversedData);
      setOffset(offset + 8);
      setLoading(false);
    })();
  }, []);

  const handleLoadMore = async () => {
    if (offset > 32) return;
    setLoading(true);
    const url = `${process.env.API_URL}/products?limit=8&offset=${offset}`;
    const res = await fetch(url);
    const data = await res.json();
    addProducts && addProducts(data);
    setOffset(offset + 8);
    setLoading(false);
  };

  if (products) {
    return (
      <Container>
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
          disabled={offset > 32}
        >
          Load more items
        </SecondaryButton>
      </Container>
    );
  }
};

export { ProductsList };
