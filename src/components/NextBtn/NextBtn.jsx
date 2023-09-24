import React from "react";
import styles from "./NextBtn.module.scss";

const NextBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.nextBtn}>
      Next
    </button>
  );
};

export default NextBtn;
