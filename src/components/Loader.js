import React from "react";
import Loader from "react-loader-spinner";
import styles from "./styles.module.css";

export default class App extends React.Component {
  //other logic
  render() {
    return (
      <div className={styles.Loader}>
        <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
      </div>
    );
  }
}
