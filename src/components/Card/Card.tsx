import React, { ReactNode } from 'react';
import styles from './Card.styles';
import { useStyles } from 'hooks';
import { Styles } from 'constants/index';

interface Props extends Styles {
  children: ReactNode;
}

const Card: React.FC<Props> = ({
  children,
  looks = '',
  customStyles,
  customClasses,
}) => {
  const [classNames] = useStyles({
    looks, styles, customClasses,
  });
  return (
    <div
      className={classNames}
      style={customStyles}>
      {children}
    </div>
  );
};


Card.defaultProps = {
  looks: 'default',
  customStyles: {},
};

export default React.memo(Card);
