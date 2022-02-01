const filterProducts = (
  products: Product[],
  Component: React.FC<Product>,
  category: string = "",
  searchString: string
) => {
  if (searchString && !category) {
    return products
      .filter((product) =>
        product.name.toLowerCase().includes(searchString.toLowerCase())
      )
      .map((product) => <Component {...product} key={product._id} />);
  }

  const categoryId = categoryToId(category);
  if (category && !searchString) {
    return products
      .filter((product) => categoryId === product.category)
      .map((product) => <Component {...product} key={product._id} />);
  }

  return products
    .filter((product) =>
      product.name.toLowerCase().includes(searchString.toLowerCase())
    )
    .filter((product) => categoryId === product.category)
    .map((product) => <Component {...product} key={product._id} />);
};

const categoryToId = (category: string) => {
  switch (category) {
    case "clothes":
      return "61f495e118ad60c910b5a17c";
    case "toys":
      return "61f4960f18ad60c910b5a183";
    case "electronics":
      return "61f495ee18ad60c910b5a17f";
    case "furniture":
      return "61f4960218ad60c910b5a181";
  }
};

export { filterProducts };
