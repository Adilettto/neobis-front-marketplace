import React from 'react';
import styles from "./PasswordRecovery.module.scss";
import LeftBackground from '../../components/LeftBackgound/LeftBackground';
import PasswordBlock from '../../components/PasswordBlock/PasswordBlock';

const PasswordRecovery = () => {
  return (
    <div className={styles.passwordRecovery}>
        <LeftBackground/>
        <div className={styles.passwordRecovery__passwordBlock}><PasswordBlock/></div>
    </div>
  )
}

export default PasswordRecovery;