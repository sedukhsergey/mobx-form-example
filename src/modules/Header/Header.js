import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { list } from '../../observbleValues';

const Header = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/form'}>Form</Link>
        </li>
      </ul>
      <button onClick={() => list.push(list.length + 1)}>Click</button>
    </div>
  );
};

export default Header;
