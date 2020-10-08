import React, { ReactNode } from 'react';
import { useStyles } from 'hooks';
import { Styles } from 'constants/index';
import styles from './Button.styles';

enum ButtonTypes {
  'button',
  'submit',
  'reset',
  undefined
}

interface Props extends Styles {
  children: ReactNode,
  onClick: () => void,
  disabled?: boolean,
  type?: ButtonTypes | any,
}


const Button: React.FC<Props> = ({
  children,
  looks = '',
  customStyles,
  customClasses,
  ...rest
}) => {
  const [classNames] = useStyles({
    looks,
    styles,
    customClasses,
  });


  return (
    <button
      className={classNames}
      style={customStyles}
      {...rest}
    >
      {children}
    </button>
  );
};


Button.defaultProps = {
  looks: 'default',
  type: 'button',
  disabled: false,
};

export default Button;
