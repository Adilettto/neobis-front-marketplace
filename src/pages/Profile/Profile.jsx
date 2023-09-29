import React, { useState } from "react";
import styles from "./Profile.module.scss";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import profileIcon from "../../assets/profilePhoto.png";
import { Input, Modal } from "antd";
import phoneIcon from "../../assets/phoneIcon.png";
import NextBtn from "../../components/NextBtn/NextBtn";
import InputMask from "react-input-mask";
import cn from "classnames";

const Profile = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEvent = () => {
    navigate(-1);
  };

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <div className={styles.profile}>
      <ProfileMenu />
      <div className={styles.profile__rightBlock}>
        <Header header="Profile" onClick={handleEvent} />
        <div className={styles.profile__profileBlock}>
          <img
            className={styles.profile__profileBlock__profileIcon}
            src={profileIcon}
            alt="profileIcon"
          />
          <p className={styles.profile__profileBlock__photoLink}>
            Choose photo
          </p>
          <Input
            className={styles.profile__profileBlock__input}
            placeholder="Name"
          />
          <Input
            className={styles.profile__profileBlock__input}
            placeholder="Last name"
          />
          <Input
            className={styles.profile__profileBlock__input}
            placeholder="Username"
          />
          <Input
            className={styles.profile__profileBlock__input}
            placeholder="Birthday date"
          />
          <br />
          <Input
            className={cn(
              styles.profile__profileBlock__input,
              styles.profile__profileBlock__inputNumber
            )}
            value="Add number"
            suffix="0 (000) 000 000"
            onClick={handleToggleModal}
          />
          <Input
            className={styles.profile__profileBlock__input}
            placeholder="Email"
          />
          <Modal
            title={
              <span className={styles.profile__profileBlock__modalTitle}>
                Change phone number
              </span>
            }
            visible={isModalVisible}
            footer={null}
            onCancel={handleToggleModal}
            className={styles.profile__profileBlock__modal}
          >
            <img
              className={styles.profile__profileBlock__modalIcon}
              src={phoneIcon}
              alt="phone-icon"
            />
            <h5 className={styles.profile__profileBlock__modalRequest}>
              Enter your phone number
            </h5>
            <p>We will send you an SMS with a confirmation code.</p>
            <InputMask
              className={styles.profile__profileBlock__modalInputMask}
              mask="0 (000) 000 000"
              placeholder="0 (000) 000 000"
            />
            <NextBtn text="Next" />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Profile;
