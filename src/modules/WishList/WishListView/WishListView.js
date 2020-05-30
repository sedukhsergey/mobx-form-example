import React from 'react';
import { observer } from 'mobx-react';
import WishListItemView from '../WishListItemView';
import styles from './styles.module.css';
import { WishListTotal, WishListItemEntry } from '../../index';

const WishListView = ({ selected }) => {
  const { items = [], add, totalPrice } = selected;
  return (
    <>
      <div className={ styles.totalContainer }>
        <WishListTotal totalPrice={ totalPrice } />
      </div>
      <ul className={ styles.list }>
        <li className={ styles.item }>
          <WishListItemEntry add={ add } />
        </li>
        {items.map((item, index) => {
          return (
            <li className={ styles.item } key={ item.name }>
              <WishListItemView item={ item } />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default observer(WishListView);
