import React, { useState } from 'react'
import styles from "./Card.module.scss";
import bmw from "../../assets/car.svg";
import likeIcon from '../../assets/likeIcon.svg';
import redHeart from "../../assets/redHeart.svg";



const Card = () => {
  const [like, setLike] = useState(false);

  const togglHeart = () => {
    setLike(!like);
  }
  return (
    <div className={styles.card}>
        <img src={bmw} alt="" className={styles.card__img} />
        <h6 className={styles.card__title}>BMW M4 Coupe: A Two-Door</h6>
        <p className={styles.card__price}>23 000$</p>
        <div className={styles.card__like}>
            <img onClick={togglHeart} src={like ? likeIcon : redHeart} alt="like icon" className={styles.card__like_icon} />
            <p className={styles.card__like_count}>100</p>
        </div>
    </div>
  )
}

export default Card