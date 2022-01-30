const filterByCategory = (
  products: Product[],
  Component: React.FC<Product>,
  category: string
) => {
  const categoryId = categoryToId(category);
  return products
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

export { filterByCategory };
