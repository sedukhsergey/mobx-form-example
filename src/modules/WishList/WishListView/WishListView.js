import React, {useEffect} from 'react';
import { observer, useObserver } from "mobx-react";
import WishListItemView from "../WishListItemView";
import styles from './styles.module.css';
import { WishListTotal, WishListItemEntry } from "../../index";
import { useWishListData } from "../../../hooks/useWishListData";

const WishListView = () => {
  const {
    items,
    add,
    totalPrice,
    fetchItems
  } = useWishListData();

  useEffect(() => {
    if (!items.length) {
      fetchItems()
    }
  },[]);
  return useObserver(() => (
    <>
      <div className={styles.totalContainer}>
        <WishListTotal totalPrice={totalPrice}/>
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
          )
        })}
      </ul>
    </>
  ))
};


export default WishListView;
