import React, { ReactNode } from 'react';
import { Styles } from 'constants/index';
import { useStyles } from 'hooks';
import styles from './H2.styles';

interface Props extends Styles {
  children: ReactNode,
}

const H2: React.FC<Props> = ({
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
    <h2
      className={classNames}
      style={customStyles}>{children}</h2>
  );
};

H2.defaultProps = {
  looks: 'default',
  customStyles: {},
};

export default H2;
