import { createContext, useState } from "react";

const initialState: AppContext = {
  products: [],
  setProducts: undefined,
  user: undefined,
  setUser: undefined,
};

const Context = createContext(initialState);

const ContextProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [user, setUser] = useState<User>(undefined);

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
