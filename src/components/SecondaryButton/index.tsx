import { Button } from "./styles";

const SecondaryButton: React.FC<React.ComponentProps<"button">> = ({
  children,
  onClick,
}) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export { SecondaryButton };
