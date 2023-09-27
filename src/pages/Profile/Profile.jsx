import React, { useState } from "react";
import styles from "./Profile.module.scss";
import ProfileMenu from "../../components/ProfileMenu/ProfileMenu";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import profileIcon from "../../assets/profilePhoto.png";
import { Input, Modal } from "antd";

const Profile = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleEvent = () => {
    navigate(-1);
  };

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  }
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
            className={styles.profile__profileBlock__input}
            value="Add number"
            readOnly
            suffix="0 (000) 000 000"
            onClick={handleToggleModal}
          />
          <Input
            className={styles.profile__profileBlock__input}
            placeholder="Email"
          />
          <Modal
            title="Change phone number"
            visible={isModalVisible}
            onOk={handleToggleModal}
            onCancel={handleToggleModal}
            className={styles.profile__profileBlock__modal}
          >
            <Input placeholder="Add number"/>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Profile;
