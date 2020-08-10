import React, {ReactNode} from 'react';
import { useStyles } from "hooks";
import {Styles} from "constants/index";
import styles from './Button.styles'

interface Props extends Styles {
  handleClick: () => void,
  children: ReactNode,
}

const Button: React.FC<Props> = ({
  children,
  looks= '',
  customStyles,
  customClasses,
  handleClick,
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
      onClick={handleClick}
      style={customStyles}
      {...rest}
    >
      {children}
    </button>
  );
};


Button.defaultProps = { looks: 'default' };

export default Button;
