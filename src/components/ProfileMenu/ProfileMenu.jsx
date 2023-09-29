import React from "react";
import styles from "./ProfileMenu.module.scss";
import profIcon from "../../assets/profilePhoto.png";
import heartIcon from "../../assets/heartIcon.png";
import myProductsIcon from "../../assets/myProductsIcon.png";
import logoutIcon from "../../assets/logOutIcon.png";
import { RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


const ProfileMenu = () => {
  return (
    <div className={styles.profileMenu}>
      <div className={styles.profileMenu__profileLink}>
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
      </div>
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
      <Link to="/" className={styles.profileMenu__logoutLink}>
        <img src={logoutIcon} alt="logout-icon" />
        <h5 className={styles.profileMenu__header}>Log out</h5>
        <RightOutlined className={styles.profileMenu__rightIcon} />
      </Link>
    </div>
  );
};

export default ProfileMenu;
