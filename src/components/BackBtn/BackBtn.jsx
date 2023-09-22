import React from 'react'
import styles from "./BackBtn.module.scss";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const BackBtn = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

  return (
    <div className={styles.backBtn} onClick={handleGoBack}>
        <ArrowLeftOutlined className={styles.backBtn_arrowIcon}/>
        <p className={styles.backBtn_backText}>Back</p>
    </div>
  )
}

export default BackBtn;