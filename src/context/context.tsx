import { createContext, useState } from "react";

const initialState: AppContext = {
  products: [],
  setProducts: undefined,
  user: undefined,
  setUser: undefined,
  filter: "",
  setFilter: undefined,
};

const Context = createContext(initialState);

const ContextProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [user, setUser] = useState<User>(undefined);
  const [filter, setFilter] = useState("");

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        user,
        setUser,
        filter,
        setFilter,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
