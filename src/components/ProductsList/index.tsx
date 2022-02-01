import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../context/context";
import { Container, Div } from "./styles";
import { ProductCard } from "../ProductCard";
import { Loading } from "../Loading";
import { filterProducts } from "../../utils/filterProducts";
import { SecondaryButton } from "../SecondaryButton";
import { SearchBar } from "../SearchBar";

const ProductsList = () => {
  const appContext = useContext(Context);
  const { user, filter, addProducts, offset, setOffset } = appContext;
  const products = appContext.products as Product[];
  const [loading, setLoading] = useState(false);
  const [searchString, setSearchString] = useState("");

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

  const handleOnChange = (e: React.ChangeEvent) => {
    // console.log((e.target as HTMLTextAreaElement).value);
    setSearchString((e.target as HTMLTextAreaElement).value);
  };

  return (
    <Container>
      <SearchBar onChange={handleOnChange} />
      <Div>
        {!filter &&
          !searchString &&
          products.map((product) => (
            <ProductCard {...product} key={product._id} />
          ))}
        {(filter || searchString) &&
          filterProducts(products, ProductCard, filter, searchString)}
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
