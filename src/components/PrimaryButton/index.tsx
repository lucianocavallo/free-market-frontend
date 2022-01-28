import React from "react";
import { Button } from "./styles";

const PrimaryButton: React.FC<React.ComponentProps<"button">> = ({
  children,
  onClick,
}) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export { PrimaryButton };
