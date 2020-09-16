import React from "react";
import styles from "./styles.module.css";

export default function Sections({ children }) {
  return <div className={styles.Container}>{children}</div>;
}
