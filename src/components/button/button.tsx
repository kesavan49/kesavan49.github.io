import { ButtonProps } from "./types";
import styles from "./button.module.scss";

const Button = ({
  children = '',
  size = "small",
  variant = "primary",
  disabled = false,
  className = {},
  ...rest
}: ButtonProps) => {

  const stylesApplied = [
    styles.button,
    className
  ]

  return <button className={stylesApplied.join(' ')} {...rest}>{children}</button>;
};

export default Button;
