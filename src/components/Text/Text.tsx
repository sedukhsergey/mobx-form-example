import React, { ReactNode } from 'react';
import { useStyles } from 'hooks';
import { Styles } from '../../constants';
import styles from './Text.styles';

interface Props extends Styles {
  children: ReactNode,
  handleClick?: () => void,
}

const Text: React.FC<Props> = ({
  looks = '',
  customClasses,
  customStyles,
  handleClick,
  children,
}) => {
  const [classNames] = useStyles({
    looks,
    customClasses,
    styles,
  });
  return (
    <span
      onClick={handleClick}
      className={classNames}
      style={customStyles}>{children}
    </span>
  );
};

Text.defaultProps = {
  looks: 'default',
  customStyles: {},
  handleClick: () => {},
};

export default Text;
