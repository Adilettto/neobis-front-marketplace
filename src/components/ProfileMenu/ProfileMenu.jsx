import React, { useState } from "react";
import styles from "./ProfileMenu.module.scss";
import profIcon from "../../assets/profilePhoto.png";
import heartIcon from "../../assets/heartIcon.png";
import myProductsIcon from "../../assets/myProductsIcon.png";
import logoutIcon from "../../assets/logOutIcon.png";
import { RightOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "antd";
import trashIcon from "../../assets/logout.svg";
import NextBtn from "../NextBtn/NextBtn";


const ProfileMenu = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const navigate = useNavigate();

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  }

  const handleLogout = () => {
    navigate("/");
  }

  return (
    <div className={styles.profileMenu}>
      <Link to="/profile" className={styles.profileMenu__profileLink}>
        <img
          className={styles.profileMenu__profileLink__icon}
          src={profIcon}
          alt="profile-icon"
        />
        <div className={styles.profileMenu__profileLink__dataBox}>
          <h5 className={styles.profileMenu__profileLink__dataBox__header}>
            Adiletto
          </h5>
          <p className={styles.profileMenu__profileLink__dataBox__email}>
            adiletto.kg@gmail.com
          </p>
        </div>
      </Link>
      <Link to="/liked" className={styles.profileMenu__likedLink}>
        <img src={heartIcon} alt="heart-icon" />
        <h5 className={styles.profileMenu__header}>Favorites</h5>
        <RightOutlined className={styles.profileMenu__rightIcon} />
      </Link>
      <Link to="/my-products" className={styles.profileMenu__myProductsLink}>
        <img src={myProductsIcon} alt="products-icon" />
        <h5 className={styles.profileMenu__header}>My products</h5>
        <RightOutlined className={styles.profileMenu__rightIcon} />
      </Link>
      <div className={styles.profileMenu__logoutLink} onClick={handleToggleModal}>
        <img src={logoutIcon} alt="logout-icon" />
        <h5 className={styles.profileMenu__header}>Log out</h5>
        <RightOutlined className={styles.profileMenu__rightIcon} />
      </div>

      <Modal
      className={styles.profileMenu__modal}
      visible={isModalVisible}
      onCancel={handleToggleModal}
      footer={null}
      >
        <img src={trashIcon} alt="trash" className={styles.profileMenu__modal_icon} />
        <h5 className={styles.profileMenu__modal_text}>Do you really want to exit the application?</h5>
        <NextBtn text="Log out" onClick={handleLogout}/>
        <NextBtn text="No"/>
      </Modal>
    </div>
  );
};

export default ProfileMenu;
