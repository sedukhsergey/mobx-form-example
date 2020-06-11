import React from 'react';
import styles from './styles.module.css';

const WishListTotal = ({ totalPrice }) => {
  return (
    <h3 className={styles.total}>
      <span className={styles.text}>Total: </span>
      <span className={styles.price}>$ {totalPrice}</span>
    </h3>
  );
};

export default WishListTotal;
