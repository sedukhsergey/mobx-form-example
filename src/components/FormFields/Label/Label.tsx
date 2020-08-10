import React, { ReactNode } from 'react';
import { useStyles } from 'hooks';
import styles from './Label.styles';
import { Styles } from 'constants/index';

interface Props extends Styles {
  id: string,
  children: ReactNode
}

const Label: React.FC<Props> = ({
  looks = '',
  customStyles,
  customClasses,
  id,
  children,
}) => {
  const [classNames] = useStyles({
    looks,
    customClasses,
    styles,
  });
  return (
    <label
      className={classNames}
      style={customStyles}
      htmlFor={id}
    >{children}</label>
  );
};

Label.defaultProps = {
  looks: 'default',
  customStyles: {},
};

export default Label;



