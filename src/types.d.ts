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
