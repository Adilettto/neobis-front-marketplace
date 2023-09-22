import React from "react";
import styles from "./LeftBackground.module.scss";
import leftBackground from "../../assets/leftBackground.png";
import shopCart from "../../assets/shopping-cart.png";


const LeftBackground = () => {
  return (
      <div className={styles.leftBackground}>
        <img
          className={styles.leftBackground__image}
          src={leftBackground}
          alt="background"
        />
        <img
          className={styles.leftBackground__icon}
          src={shopCart}
          alt="shop-cart"
        />
        <h1 className={styles.leftBackground__header}>MOBI MARKET</h1>
      </div>
  );
};

export default LeftBackground;
