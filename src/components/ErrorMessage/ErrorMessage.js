import React from 'react';
import styles from './styles.module.css';

const ErrorMessage = ({ children }) => {
  return <p className={styles.error}>{children}</p>;
};

export default ErrorMessage;
