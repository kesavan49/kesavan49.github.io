import React, { FC } from "react";
import styles from "./split.module.scss";
import { SplitLayoutProps } from "./types";

const SplitLayout: FC<SplitLayoutProps> = (props) => {
  const { left, right, className, id } = props;
  return (
    <div className={`${styles.splitContainer} ${className ? className : ''}`} id={id}>
      <div className={styles.left}>{left}</div>
      <div className={styles.right}>{right}</div>
    </div>
  );
};

export default SplitLayout;
