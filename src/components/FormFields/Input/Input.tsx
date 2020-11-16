import React from 'react';
import { observer } from 'mobx-react';
import cx from 'classnames';

import styles from './Input.styles';
import { useStyles } from 'hooks';
import {
  Styles, InputField,
} from 'constants/index';

interface Props extends Styles, InputField {
  error?: string,
}
const Input: React.FC<Props> = ({
  looks = '',
  customStyles,
  customClasses,
  error,
  ...rest
}) => {
  const [classNames] = useStyles({
    looks, styles, customClasses,
  });

  return (
    <input
      className={cx(
        classNames,
        { [styles.error]: error }
      )}
      style={customStyles}
      {...rest}
    />
  );
};


Input.defaultProps = {
  looks: 'default',
  customStyles: {},
};

export default observer(Input);
