import Link from "next/link";
import cn from "classnames";
import styles from "./button.module.css";

const LinkButton = ({ href, children }: any) => {
  return (
    <Link href={href} as={href}>
      {children}
    </Link>
  );
};

const BaseButton = ({ children, ...props }: any) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};

const Button = ({
  primary,
  secondary,
  full = false,
  isLoading = false,
  children,
  className,
  ...props
}: any) => {
  const Comp = props.href ? LinkButton : BaseButton;
  return (
    <>
      <Comp
        className={cn(
          styles.button,
          primary && styles.primary,
          secondary && styles.secondary,
          full && styles.full,
          isLoading && styles.isLoading,
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    </>
  );
};

export default Button;
