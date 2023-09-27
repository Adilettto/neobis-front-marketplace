import React from 'react'
import BackBtn from '../BackBtn/BackBtn'
import styles from "./Header.module.scss";

const Header = ( { header, onClick }) => {
  return (
    <div className={styles.header}>
        <BackBtn onClick={onClick}/>
        <h2 className={styles.header__header}>{header}</h2>
    </div>
  )
}

export default Header