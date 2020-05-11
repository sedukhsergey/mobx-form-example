import React, { useEffect } from 'react';
import { inject, observer } from "mobx-react";
import styles from './styles.module.css';
import SantaImage from '../../assets/santa.jpeg';
import { WishListView } from "../../modules";


const WishList = inject('mobxStore')(observer(props => {
  const {
    mobxStore: {
      wishListStore: {
        items,
        add,
        totalPrice,
        fetchItems
      }
    },
  } = props;
  console.log('items',items)
  useEffect(() => {
      if (!items.length) {
        fetchItems()
      }
  },[]);
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>Wish List</h1>
        <img src={SantaImage} alt="santa"/>
      </header>
      <WishListView wishList={items}/>
    </div>
  )
}));

export default WishList;
