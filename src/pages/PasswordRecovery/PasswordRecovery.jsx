import React from "react";
import styles from "./PasswordRecovery.module.scss";
import LeftBackground from "../../components/LeftBackgound/LeftBackground";
import PasswordBlock from "../../components/PasswordBlock/PasswordBlock";
import BackBtn from "../../components/BackBtn/BackBtn";


const PasswordRecovery = () => {
  return (
    <div className={styles.passwordRecovery}>
      <LeftBackground />

      <div className={styles.passwordRecovery__passwordBlock}>
        <div className={styles.passwordRecovery__passwordBlock_backBtn}>
          <BackBtn />
          <h3 className={styles.passwordRecovery__passwordBlock_backBtn_header}>Sign Up</h3>
        </div>
        <PasswordBlock />
        
      </div>
    </div>
  );
};

export default PasswordRecovery;
