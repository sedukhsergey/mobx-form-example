import React from 'react';
import { Link } from 'react-router-dom';
import { LoginView } from '../../modules';
import styles from './styles.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <LoginView />
      <div className={styles.linkContainer}>
        <Link to={'/registration'}>
          <span>Or you're already have an account &#x21AA;</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
