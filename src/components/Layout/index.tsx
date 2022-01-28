import { FC } from "react";
import { Header } from "../Header";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export { Layout };
