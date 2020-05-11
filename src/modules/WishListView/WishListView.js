import React from 'react';
import { observer, inject} from "mobx-react";
import WishListItemView from "./WishListItemView";
import styles from './styles.module.css';

const WishListView = ({ wishList }) => {
  return (
    <ul className={styles.list}>
      {wishList.map((item, index) => {
        return (
          <WishListItemView item={item} key={index} />
        )
      })}
    </ul>
  )
};


export default WishListView;
