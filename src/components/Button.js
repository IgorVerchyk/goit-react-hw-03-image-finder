import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

export default function ButtonRender({ onFetchImages }) {
  return (
    <button className={styles.Button} onClick={onFetchImages}>
      load more
    </button>
  );
}

ButtonRender.propTypes = {
  onFetchArticle: PropTypes.func,
};
