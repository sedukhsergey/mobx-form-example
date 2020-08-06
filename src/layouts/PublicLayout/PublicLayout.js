import React from 'react';
import styles from './styles.module.css';

const PublicLayout = ({ children, }) => (
  <div className={styles.container}>{children}</div>
);

export default PublicLayout;
