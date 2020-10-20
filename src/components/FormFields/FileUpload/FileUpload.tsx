import React, { ChangeEvent } from 'react';
import { observer } from 'mobx-react';
import { Input } from 'components';
import { NotBoundedInput } from 'constants/interfaces';

interface Props {
  field: NotBoundedInput,
  multiple?: boolean,
  error: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  customClasses?: string;
}

const FileUpload: React.FC<Props> = ({
  field,
  error,
  ...rest
}) => (
  <div className={'relative overflow-hidden inline-block w-40'}>
    <Input
      error={error}
      looks={'not-default'}
      customStyles={{
        height: '40px',
        width: '150px',
      }}
      {...field.bind()}
      {...rest}
    />
  </div>
);

FileUpload.defaultProps = { customClasses: 'custom-file-upload' };

export default observer(FileUpload);
