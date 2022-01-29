import React from "react";
import { Button } from "./styles";

const PrimaryButton: React.FC<React.ComponentProps<"button">> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

export { PrimaryButton };
