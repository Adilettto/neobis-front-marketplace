import React from "react";
import styles from "./PasswordBlock.module.scss";
import lockIcon from "../../assets/lockIcon.png";
import { Input } from "antd";
import { EyeInvisibleFilled } from "@ant-design/icons";
import NextBtn from "../NextBtn/NextBtn";
import { useNavigate } from "react-router-dom";

const PasswordBlock = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/profile");
  };
  return (
    <div className={styles.passwordBlock}>
      <img
        className={styles.passwordBlock__lockIcon}
        src={lockIcon}
        alt="lock-icon"
      />
      <h4 className={styles.passwordBlock__passwordRequest}>
        Create a password
      </h4>
      <p className={styles.passwordBlock__passwordConditions}>
        The minimum length is 8 characters. For security, the password should
        contain both letters and numbers.
      </p>
      <Input
        type="password"
        className={styles.passwordBlock__inputPassword}
        placeholder="Enter password"
        suffix={<EyeInvisibleFilled />}
      />
      <Input
        type="password"
        className={styles.passwordBlock__inputPassword}
        placeholder="Confirm password"
        suffix={<EyeInvisibleFilled />}
      />
      <NextBtn onClick={handleNext} text="Next"/>
    </div>
  );
};

export default PasswordBlock;
