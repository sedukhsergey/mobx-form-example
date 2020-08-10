import React from 'react';
import { observer } from 'mobx-react';
import styles from './Input.styles';
import { useStyles } from 'hooks';
import {
  Styles, InputField,
} from 'constants/index';

interface Props extends Styles, InputField {

}
const Input: React.FC<Props> = ({
  looks = '',
  customStyles,
  customClasses,
  ...rest
}) => {
  const [classNames] = useStyles({
    looks, styles, customClasses,
  });
  return (
    <input
      className={classNames}
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
