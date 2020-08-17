import React from 'react';
import styles from './styles.module.css';
import { useObserver } from 'mobx-react';
import { WishListItem } from 'store/StoreTypes/WishListStore';

type Props = {
  item: WishListItem,
}

const WishListItemEdit:React.FC<Props> = ({ item }) => {
  const handleChangeImage = (e: React.FormEvent<HTMLInputElement>)  => {
    item.changeImage(e.currentTarget.value);
  };

  const handleChangeName = (e: React.FormEvent<HTMLInputElement>) => {
    item.changeName(e.currentTarget.value);
  };

  const handleChangePrice = (e: React.FormEvent<HTMLInputElement>) => {
    const price = parseInt(e.currentTarget.value);
    if (!isNaN(price)) {
      item.changePrice(price);
    }
  };

  return useObserver(() => (
    <div className={styles.editItem}>
      <div className={styles.inputContainer}>
        <label htmlFor="image">Image:</label>
        <input
          type="text"
          name="image"
          value={item.image}
          onChange={handleChangeImage}
        />
      </div>
      <br />
      <div className={styles.inputContainer}>
        <label htmlFor="image">Name:</label>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handleChangeName}
        />
      </div>
      <br />
      <div className={styles.inputContainer}>
        <label htmlFor="image">Price:</label>
        <input
          type="text"
          name="price"
          value={item.price}
          onChange={handleChangePrice}
        />
      </div>
    </div>
  ));
};

export default WishListItemEdit;
