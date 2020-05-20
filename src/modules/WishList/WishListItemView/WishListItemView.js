import React, { useState, useEffect } from 'react';
import { clone, getSnapshot, applySnapshot } from 'mobx-state-tree';
import styles from './styles.module.css';
import { WishListItemEdit } from '../../index';

const WishListItemView = ({ item }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [cloneItem, setClone] = useState(null);

  const handleEditEnabled = () => {
    setIsEditable(true);
    setClone(clone(item));
  };

  const handleEditDisabled = () => {
    setIsEditable(false);
  };

  const handleSave = () => {
    applySnapshot(item, getSnapshot(cloneItem));
    handleEditDisabled();
    setClone(null);
  };

  const handleItemRemove = () => {
    item.remove();
  };

  const renderEditableItem = (
    <>
      <WishListItemEdit item={cloneItem} />
      <div className={styles.actionsContainer}>
        <button className={styles.editButton} onClick={handleSave}>
          <span role="img" aria-label="confirm">
            ✓
          </span>
        </button>
        <button className={styles.editButton} onClick={handleEditDisabled}>
          <span role="img" aria-label="delete">
            ❌
          </span>
        </button>
      </div>
    </>
  );

  return isEditable ? (
    renderEditableItem
  ) : (
    <div className={styles.item}>
      {item.image && <img className={styles.img} src={item.image} alt="logo" />}
      <h3>{item.name}</h3>
      <span>{item.price}</span>
      <button className={styles.editButton} onClick={handleEditEnabled}>
        &#9998;
      </button>
      <button className={styles.editButton} onClick={handleItemRemove}>
        &#128465;
      </button>
    </div>
  );
};

export default WishListItemView;
