import React, {
  useState
} from 'react';
import WishListItemModel from 'store/models/WishListStore/WishListItem';
import  WishListItemEdit  from '../WishListItemEdit';
import styles from './styles.module.css';

const WishListItemEntry = ({
  add,
}) => {
  const [
    item, setItem,
  ] = useState(WishListItemModel.create({
    name: '',
    price: 0,
    image: '',
  }));

  const handleItemAdd = () => {
    add(item);
    setItem(WishListItemModel.create({
      name: '',
      price: 0,
      image: '',
    }));
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
