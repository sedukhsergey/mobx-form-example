import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { Button } from 'components';
import { useAuthData } from 'hooks/useAuthData';

const Header = () => {
  const { isAuthorized, logOut } = useAuthData();
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
      </ul>
      {isAuthorized && (
        <div className={styles.buttonContainer}>
          <Button onClick={logOut}>Log out</Button>
        </div>
      )}
    </div>
  );
};

export default observer(Header);
