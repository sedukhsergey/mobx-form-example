import React from 'react';
import { observer } from 'mobx-react';
import styles from './styles.module.css';

const Input = ({ id, label, ...rest }) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input id={id} className={styles.input} {...rest} />
    </>
  );
};

export default observer(Input);
