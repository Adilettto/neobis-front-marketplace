import React from "react";
import styles from "./Signup.module.scss";
import { Input } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";
import BackBtn from "../../components/BackBtn/BackBtn";
import LeftBackground from "../../components/LeftBackgound/LeftBackground";
import { useNavigate } from "react-router-dom";
import NextBtn from "../../components/NextBtn/NextBtn";

const Signup = () => {
  const navigate = useNavigate();
  const handleNext = () => {
    navigate("/password-recovery");
  };

  return (
    <div className={styles.signup}>
      <LeftBackground />
      <div className={styles.signup__block}>
        <div className={styles.signup__block_upperBlock}>
          <BackBtn />
          <h2 className={styles.signup__block_upperBlock_header}>Sign Up</h2>
        </div>

        <Input
          className={styles.signup__block_inputName}
          type="text"
          placeholder="Username"
          suffix={<UserOutlined />}
        />
        <Input
          type="email"
          className={styles.signup__block_inputPassword}
          placeholder="Email"
          suffix={<MailOutlined />}
        />
        <NextBtn onClick={handleNext} />
        {/* how can i put onClick method to components? */}
      </div>
    </div>
  );
};

export default Signup;
