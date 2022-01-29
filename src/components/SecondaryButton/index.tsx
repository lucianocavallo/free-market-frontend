import { Button } from "./styles";

const SecondaryButton: React.FC<React.ComponentProps<"button">> = ({
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

export { SecondaryButton };
