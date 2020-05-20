import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
