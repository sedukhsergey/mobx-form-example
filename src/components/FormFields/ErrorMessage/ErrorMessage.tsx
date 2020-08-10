import React, { ReactNode } from 'react';
import { Styles } from 'constants/index';
import styles from './ErrorMessage.styles';
import { useStyles } from 'hooks';

interface Props extends Styles {
  children: ReactNode,
}

const ErrorMessage: React.FC<Props> = (
  {
    children,
    looks = '',
    customClasses,
    customStyles,
  }
) => {
  const [classNames] = useStyles({
    looks,
    customClasses,
    styles,
  });
  return (
    <p
      className={classNames}
      style={customStyles}>{children}</p>
  );
};

ErrorMessage.defaultProps = { looks: 'default' };

export default ErrorMessage;
