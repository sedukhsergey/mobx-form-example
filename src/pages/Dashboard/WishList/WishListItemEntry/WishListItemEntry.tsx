import React, { useState } from 'react';
import WishListItemModel from 'store/models/WishListStore/WishListItem';
import WishListItemEdit from '../WishListItemEdit';
import styles from './styles.module.css';
import { WishListItem } from 'store/StoreTypes/WishListStore';

type Props = {
  add: (item: WishListItem) => void,
}

const WishListItemEntry:React.FC<Props> = ({ add }) => {
  const [item, setItem] = useState<WishListItem>(
    WishListItemModel.create({
      name: '',
      price: 0,
      image: '',
    })
  );

  const handleItemAdd = () => {
    add(item);
    setItem(
      WishListItemModel.create({
        name: '',
        price: 0,
        image: '',
      })
    );
  };

  return (
    <div>
      <WishListItemEdit item={item} />
      <div className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={handleItemAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default WishListItemEntry;
