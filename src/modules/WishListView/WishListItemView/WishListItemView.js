import React from 'react';
import styles from './styles.module.css';

const WishListItemView = ({ item }) => {
  return (
    <li className={styles.item}>
      {item.image && <img src={item.image} alt='logo' />}
      <h3>{item.name}</h3>
      <span>{item.price}</span>
    </li>
  )
}

export default WishListItemView;
