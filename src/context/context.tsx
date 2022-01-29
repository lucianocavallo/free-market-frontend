import { createContext, useState } from "react";

const initialState: AppContext = {
  products: [],
  setProducts: undefined,
};

const Context = createContext(initialState);

const ContextProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
