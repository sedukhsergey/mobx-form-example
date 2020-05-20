import React from 'react';
import { useObserver } from 'mobx-react';
import WishListItemView from '../WishListItemView';
import styles from './styles.module.css';
import { WishListTotal, WishListItemEntry } from '../../index';

const WishListView = ({ selected }) => {
  const { items = [], add, totalPrice } = selected;

  return useObserver(() => (
    <>
      <div className={styles.totalContainer}>
        <WishListTotal totalPrice={totalPrice} />
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <WishListItemEntry add={add} />
        </li>
        {items.map((item, index) => {
          return (
            <li className={styles.item}>
              <WishListItemView item={item} key={index} />
            </li>
          );
        })}
      </ul>
    </>
  ));
};

export default WishListView;
