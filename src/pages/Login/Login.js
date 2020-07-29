import React from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  LoginView,
} from '../../modules';
import styles from './styles.module.css';

const Login = () => (
  <>
    <LoginView />
    <div className={styles.linkContainer}>
      <Link to={'/registration'}>
        <span>Or you&apos;re already have an account &#x21AA;</span>
      </Link>
    </div>
  </>
);

export default Login;
