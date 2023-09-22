import React from 'react';
import styles from "./Signup.module.scss";
import shopCart from "../../assets/shopping-cart.png";
import leftBackground from "../../assets/leftBackground.png";
import { Button, Input } from 'antd';
import {MailOutlined, UserOutlined} from "@ant-design/icons"
import BackBtn from '../../components/BackBtn/BackBtn';

const Signup = () => {
  return (
    <div className={styles.signup}>
        <div className={styles.signup__image}>
            <img className={styles.signup__image__background} src={leftBackground} alt="background" />
            <img className={styles.signup__image__icon} src={shopCart} alt="shop-cart" />
            <h1 className={styles.signup__image__header}>MOBI MARKET</h1>
        </div>
        <div className={styles.signup__block}>
            <div className={styles.signup__block_upperBlock}>
            <BackBtn/>
                <h2 className={styles.signup__block_upperBlock_header}>Sign Up</h2>
                
            </div>
            <Input className={styles.signup__block_inputName} type="text" placeholder='Username' suffix={<UserOutlined/>}/>
            <Input type="email" className={styles.signup__block_inputPassword} placeholder='Email' suffix={<MailOutlined/>}/>
            <button className={styles.signup__block_nextBtn}>Next</button>
        </div>
    </div>
  )
}

export default Signup;