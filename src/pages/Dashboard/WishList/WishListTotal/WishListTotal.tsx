import React from 'react';
import styles from './styles.module.css';

type Props = {
  totalPrice: number,
}

const WishListTotal:React.FC<Props> = ({ totalPrice }) => (
  <h3 className={styles.total}>
    <span className={styles.text}>Total: </span>
    <span className={styles.price}>${totalPrice}</span>
  </h3>
);

export default WishListTotal;
