import React from "react";
import styles from "./Liked.module.scss";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

const Liked = () => {
  const numOfCards = 12;
  return (
    <div className={styles.liked}>
      <ProfileMenu />
      <div className={styles.liked__rightBlock}>
        <Header header="Liked"/>
        <div className={styles.liked__rightBlock__container}>
        {Array.from({ length: numOfCards }).map((_, index) => (
          <Card
            key={index} 
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Liked;
