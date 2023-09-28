import React from "react";
import styles from "./Home.module.scss";
import shopCart from "../../assets/shopping-cart.png";
import NextBtn from "../../components/NextBtn/NextBtn";
import userIcon from "../../assets/profilePhoto.png";
import Card from "../../components/Card/Card";


const Home = () => {
  const numOfCards = 30;
  return (
    <div className={styles.home}>

      <div className={styles.home__header}>
        <div className={styles.home__header__logo}>
          <img src={shopCart} alt="" className={styles.home__header__logoImg} />
          <h1 className={styles.home__header__logoTitle}>MOBI MARKET</h1>
        </div>
        <div className={styles.home__header__rightBlock}>
          <NextBtn text="Place an Ad"/>
          <div className={styles.home__header__rightBlock__account}>
            <div className={styles.home__header__rightBlock__account_name}>
              <h5>Adiletto</h5>
              <p>adiletto.kg@gmail.com</p>
            </div>
            <img src={userIcon} alt="user icon" className={styles.home__header__rightBlock__account_img} />
          </div>
        </div>
      </div>

      <div className={styles.home__content}>
      {Array.from({ length: numOfCards }).map((_, index) => (
          <Card
            key={index} // Use the index as a unique key for each Card component
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
