import React from "react";
import { Button } from "./styles";

const PrimaryButton: React.FC<React.ComponentProps<"button">> = ({
  children,
  onClick,
  disabled,
  className,
}) => {
  return (
    <Button disabled={disabled} onClick={onClick} className={className}>
      {children}
    </Button>
  );
};

export { PrimaryButton };
