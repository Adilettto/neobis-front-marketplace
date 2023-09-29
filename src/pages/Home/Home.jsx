import React, { useState } from "react";
import styles from "./Home.module.scss";
import shopCart from "../../assets/shopping-cart.png";
import NextBtn from "../../components/NextBtn/NextBtn";
import userIcon from "../../assets/profilePhoto.png";
import Card from "../../components/Card/Card";
import { Input, Modal } from "antd";
import addImageIcon from "../../assets/image-add.svg";

const Home = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const numOfCards = 30;
  return (
    <div className={styles.home}>
      <div className={styles.home__header}>
        <div className={styles.home__header__logo}>
          <img src={shopCart} alt="" className={styles.home__header__logoImg} />
          <h1 className={styles.home__header__logoTitle}>MOBI MARKET</h1>
        </div>
        <div className={styles.home__header__rightBlock}>
          <NextBtn text="Place an Ad" onClick={toggleModal} />
          <div className={styles.home__header__rightBlock__account}>
            <div className={styles.home__header__rightBlock__account_name}>
              <h5>Adiletto</h5>
              <p>adiletto.kg@gmail.com</p>
            </div>
            <img
              src={userIcon}
              alt="user icon"
              className={styles.home__header__rightBlock__account_img}
            />
          </div>
        </div>
      </div>

      <div className={styles.home__content}>
        {Array.from({ length: numOfCards }).map((_, index) => (
          <Card
            key={index} 
          />
        ))}
      </div>

      <Modal
        visible={isModalVisible}
        footer={null}
        onCancel={toggleModal}
        className={styles.home__modal}
      >
        <div className={styles.home__modal__img}>
          <img
            src={addImageIcon}
            alt="icon"
            className={styles.home__modal__img_icon}
          />
          <p className={styles.home__modal__img_text}>Add photo</p>
        </div>

        <Input className={styles.home__modal__input} placeholder="Price" />
        <Input className={styles.home__modal__input} placeholder="Title" />
        <Input
          className={styles.home__modal__input}
          placeholder="Brief description"
        />
        <Input
          className={styles.home__modal__input}
          placeholder="Full description"
        />
        <div className={styles.home__modal__btn}>
          <NextBtn text="Next"/>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
