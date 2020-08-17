import React from 'react';
import { observer } from 'mobx-react';
import WishListItemView from '../WishListItemView';
import styles from './styles.module.css';
import WishListTotal from '../WishListTotal';
import WishListItemEntry from '../WishListItemEntry';
import { WishListItem } from 'types/WishList';

type Props = {
  selected: {
    items: WishListItem[],
    add: (item: WishListItem) => void,
    totalPrice: number,
  }
}

const WishListView: React.FC<Props> = ({
  selected: {
    items,
    add,
    totalPrice,
  },
}) => (
  <>
    <div className={styles.totalContainer}>
      <WishListTotal totalPrice={totalPrice} />
    </div>
    <ul className={styles.list}>
      <li className={styles.item}>
        <WishListItemEntry add={add} />
      </li>
      {items.map(item => (
        <li
          className={styles.item}
          key={item.name}>
          <WishListItemView item={item} />
        </li>
      ))}
    </ul>
  </>
);

export default observer(WishListView);
