import React, { ReactNode } from 'react';
import { useStyles } from 'hooks';
import { Styles } from '../../constants';
import styles from './Text.styles';

interface Props extends Styles {
  children: ReactNode,
}

const Text: React.FC<Props> = ({
  looks = '',
  customClasses,
  customStyles,
  children,
}) => {
  const [classNames] = useStyles({
    looks,
    customClasses,
    styles,
  });
  return (
    <span
      className={classNames}
      style={customStyles}>{children}
    </span>
  );
};

Text.defaultProps = {
  looks: 'default',
  customStyles: {},
};

export default Text;
