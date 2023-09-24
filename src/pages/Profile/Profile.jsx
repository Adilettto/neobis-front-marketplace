import React from 'react'
import styles from "./Profile.module.scss";
import ProfileMenu from '../../components/ProfileMenu/ProfileMenu';

const Profile = () => {
  return (
    <div className={styles.profile}>
      <ProfileMenu/>
    </div>
  )
}

export default Profile