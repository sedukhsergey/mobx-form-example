import React from 'react';
import styles from './styles.module.css';
import { useObserver } from 'mobx-react';

const WishListItemEdit = ({ item }) => {
  const handleChangeImage = (e) => {
    item.changeImage(e.target.value);
  };

  const handleChangeName = (e) => {
    item.changeName(e.target.value);
  };

  const handleChangePrice = (e) => {
    const price = parseInt(e.target.value);
    if (!isNaN(price)) {
      item.changePrice(price);
    }
  };

  return useObserver(() => (
    <div className={ styles.editItem }>
      <div className={ styles.inputContainer }>
        <label htmlFor="image">Image:</label>
        <input type="text" name="image" value={ item.image } onChange={ handleChangeImage } />
      </div>
      <br />
      <div className={ styles.inputContainer }>
        <label htmlFor="image">Name:</label>
        <input type="text" name="name" value={ item.name } onChange={ handleChangeName } />
      </div>
      <br />
      <div className={ styles.inputContainer }>
        <label htmlFor="image">Price:</label>
        <input type="text" name="price" value={ item.price } onChange={ handleChangePrice } />
      </div>
    </div>
  ));
};

WishListItemEdit.defaultProps = {
  item: {
    image: '',
  },
};

export default WishListItemEdit;
