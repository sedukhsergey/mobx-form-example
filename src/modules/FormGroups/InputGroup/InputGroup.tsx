import React from 'react';
import { observer } from 'mobx-react';
import { InputField } from '../../../constants';
import {
  Input,
  Label,
  ErrorMessage,
} from 'components';

interface Props {
  field: InputField,
  error: string,
}



const InputGroup: React.FC<Props> = ({
  field, error,
}) => {
  return (
    <>
      <Label id={field.id}>{field.label}</Label>
      <Input
        {...field}
        error={error} />
      <ErrorMessage>{error}</ErrorMessage>
    </>
  );
};

InputGroup.defaultProps = { error: '' };

export default observer(InputGroup);
