import { useEffect, useContext } from "react";
import { Context } from "../../context/context";
import { Container, Div, Button } from "./styles";
// import { ProductCard } from "../ProductCard";
import { Loading } from "../Loading";

const ProductsList = () => {
  const context = useContext(Context);
  const { products, setProducts } = context;

  // useEffect(() => {
  //   const url = `${process.env.API_URL}/products`;

  //   (async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(data);
  //     const reversedData = data.reverse();
  //     if (setProducts !== undefined) {
  //       setProducts(reversedData);
  //     }
  //   })();
  // }, []);

  return (
    <Container>
      {!products.length && <Loading />}
      <Div>
        {/* {products.map((product) => (
          <ProductCard {...product} key={product._id} />
        ))} */}
      </Div>
      <Button>Load more items</Button>
    </Container>
  );
};

export { ProductsList };
