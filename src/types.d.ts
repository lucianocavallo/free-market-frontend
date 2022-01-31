declare module "*.svg";
declare module "*.png";
// {
//   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//   export default content;
// }

interface Product {
  name: string;
  price: number;
  image: string;
  category: string;
  _id: string;
}

interface AppContext {
  products?: Product[] | any[];
  setProducts?: React.Dispatch<React.SetStateAction<Product[]>> | undefined;
  user?: User;
  setUser?: React.Dispatch<React.SetStateAction<User>> | undefined;
  filter?: string;
  setFilter?: React.Dispatch<React.SetStateAction<string>> | undefined;
  cart?: Product[] | any[];
  addToCart?: (product: Product) => void | undefined;
  removeFromCart?: (product: Product) => void | undefined;
  logout?: (() => void) | undefined;
  addProducts?: (newProducts: Products[]) => void;
  offset?: number;
  setOffset?: React.Dispatch<React.SetStateAction<number>> | undefined;
}

type User =
  | {
      userId?: string;
      email?: string;
      token?: string;
      role?: string;
      order?: {
        products: string[];
      };
    }
  | undefined;

interface ErrorMsg {
  error: string;
}

interface DropdownMenuProps {
  email?: string;
  token?: string;
  role?: string;
  order?: {
    products: string[];
  };
  toggleShowMenu: () => void;
}
interface CartProps {
  products?: Product[] | any[];
  setProducts?: React.Dispatch<React.SetStateAction<Product[]>> | undefined;
  user?: User;
  setUser?: React.Dispatch<React.SetStateAction<User>> | undefined;
  filter?: string;
  setFilter?: React.Dispatch<React.SetStateAction<string>> | undefined;
  cart?: Product[] | any[];
  addToCart?: (product: Product) => void | undefined;
  removeFromCart?: (product: Product) => void | undefined;
  logout?: (() => void) | undefined;
  addProducts?: (newProducts: Products[]) => void;
  toggleShowCart?: () => void;
  offset?: number;
  setOffset?: React.Dispatch<React.SetStateAction<number>> | undefined;
}
