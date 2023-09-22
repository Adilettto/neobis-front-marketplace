import {useState} from 'react';
import styles from "./Login.module.scss";
import shopCart from "../../assets/shopping-cart.png";
import leftBackground from "../../assets/leftBackground.png";
import { Link } from 'react-router-dom';
import eyeDisable from "../../assets/eye-disable.png";
import eyeOpen from "../../assets/eye.png";
import LeftBackground from '../../components/LeftBackgound/LeftBackground';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

  return (
    <div className={styles.login}>
        <LeftBackground/>
        <div className={styles.login__block}>
            <input className={styles.login__block_inputName} type="text" placeholder='Username'/>
            <input type={showPassword ? "text" : "password"} className={styles.login__block_inputPassword} placeholder='Password'/>
            <img src={showPassword ? eyeOpen : eyeDisable} alt="eye-open" className={styles.login__block_eyeIcon} onClick={togglePasswordVisibility}/>
            <button className={styles.login__block_loginBtn}>Login</button>
            <Link to="/signup" className={styles.login__block_signupLink}>Sign Up</Link>
        </div>
    </div>
  )
}

export default Login;