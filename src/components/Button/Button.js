import React from 'react';
import styles from './styles.module.css';
import getStyle from 'utils/getStyle';

const Button = ({ children, looks, ...rest }) => {
  const customStyles = getStyle({ looks, styles });
  return (
    <button className={customStyles} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  looks: ['submit'],
};

export default Button;
