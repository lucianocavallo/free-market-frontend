import { createContext, useState } from "react";

const initialState: AppContext = {
  products: [],
  setProducts: undefined,
  user: undefined,
  setUser: undefined,
  filter: "",
  setFilter: undefined,
  cart: [],
  addToCart: undefined,
  removeFromCart: undefined,
};

const Context = createContext(initialState);

const ContextProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [user, setUser] = useState<User>(undefined);
  const [filter, setFilter] = useState("");
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product: Product) => {
    const index = cart.indexOf(product);
    const cartCopy = [...cart];
    cartCopy.splice(index, 1);
    setCart(cartCopy);
  };

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        user,
        setUser,
        filter,
        setFilter,
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
