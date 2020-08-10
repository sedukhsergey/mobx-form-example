import React, { ReactNode } from 'react';
import { Styles } from 'constants/index';
import { useStyles } from 'hooks';
import styles from './H1.styles';

interface Props extends Styles {
  children: ReactNode,
}

const H1: React.FC<Props> = ({
  children,
  looks = '',
  customStyles,
  customClasses,
}) => {
  const [classNames] = useStyles({
    looks,
    styles,
    customClasses,
  });

  return (
    <h1
      className={classNames}
      style={customStyles}>{children}</h1>
  );
};

H1.defaultProps = {
  looks: 'default',
  customStyles: {},
};

export default H1;
