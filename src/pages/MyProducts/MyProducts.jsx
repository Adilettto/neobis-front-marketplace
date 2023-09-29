import React from "react";
import styles from "./MyProducts.module.scss";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

const MyProducts = () => {
  const numOfCards = 12;
  return (
    <div className={styles.myProducts}>
      <ProfileMenu />
      <div className={styles.myProducts__rightBlock}>
        <Header header="My products" />
        <div className={styles.myProducts__rightBlock__container}>
          {Array.from({ length: numOfCards }).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
