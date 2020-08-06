import React from 'react';
import { Link, } from 'react-router-dom';
import LoginView from './LoginView';
import styles from './styles.module.css';
import { RoutesList, } from 'routes';

const Login = () => (
  <>
    <LoginView />
    <div className={styles.linkContainer}>
      <Link to={RoutesList.registration}>
        <span>Or you&apos;re already have an account &#x21AA;</span>
      </Link>
    </div>
  </>
);

export default Login;
