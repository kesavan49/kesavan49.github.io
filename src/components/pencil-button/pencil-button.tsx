import { PencilButtonProps } from "./types";
import styles from "./pencil.module.scss";

const PencilButton = ({
  className = '',
  onClick = () => {},
  label
}: PencilButtonProps) => {

  const stylesApplied = [
    styles.exploreBtn,
    className
  ]

  return  <div className={stylesApplied.join(' ')} onClick={onClick}>
  <div className={styles.tail}></div>
  <div className={styles.main}>{label}</div>
  <div className={styles.head}></div>
</div>;
};

export default PencilButton;
