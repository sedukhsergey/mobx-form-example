import React from 'react';
import { observer } from 'mobx-react';
import { Input } from 'components';
import { NotBoundedInput } from 'constants/interfaces';

interface File {
  name: string,
}

interface Props {
  field: NotBoundedInput,
  error: string,
}


const FileUpload: React.FC<Props> = ({
  field,
  error,
}) => (
  <div className={'relative overflow-hidden inline-block w-40'}>
    <Input
      error={error}
      looks={'not-default'}
      customStyles={{
        height: '40px',
        width: '150px',
      }}
      customClasses={'custom-file-input'}
      {...field.bind()}
    />
  </div>
);

export default observer(FileUpload);
