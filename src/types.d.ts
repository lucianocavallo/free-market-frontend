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
}

interface AppContext {
  products: Product[] | any[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>> | undefined;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>> | undefined;
}

type User =
  | {
      email?: string;
      token?: string;
      role?: string;
    }
  | undefined;
