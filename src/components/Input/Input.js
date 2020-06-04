import React from 'react';
import styles from './styles.module.css';

const Input = ({ label, name, ...rest }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input className={styles.input} {...rest} />
    </>
  );
};

export default Input;
