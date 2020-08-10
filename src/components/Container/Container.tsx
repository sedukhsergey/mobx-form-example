import React, { ReactNode } from 'react';
import { observer } from 'mobx-react';
import { useStyles } from 'hooks';
import styles from './Container.styles';
import { Styles } from 'constants/index';

interface Props extends Styles {
  children: ReactNode,
}

const Container: React.FC<Props> = ({
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
      style={customStyles}
    >
      {children}
    </div>
  );
};

Container.defaultProps = {
  looks: 'default',
  customStyles: {},
};

export default observer(Container);
