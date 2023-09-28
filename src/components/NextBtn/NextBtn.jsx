import React from "react";
import styles from "./NextBtn.module.scss";

const NextBtn = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={styles.nextBtn}>
      {text}
    </button>
  );
};

export default NextBtn;
