import React, { ReactNode } from 'react';
import { observer } from 'mobx-react';
import { useStyles } from 'hooks';
import styles from './Container.styles';
import { Styles } from '../../constants';

interface Props extends Styles {
  children: ReactNode,
}

const Container: React.FC<Props> = ({
  children,
  looks = '',
  customStyles,
}) => {
  const [classNames] = useStyles({
    looks, styles,
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
