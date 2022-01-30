import { Button } from "./styles";

const SecondaryButton: React.FC<React.ComponentProps<"button">> = ({
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

export { SecondaryButton };
