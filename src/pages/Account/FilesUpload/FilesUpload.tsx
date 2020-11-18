import React from 'react';
import { observer } from 'mobx-react';

import cx from 'classnames';
import {
  FileUpload, H2,
} from 'components';
import FileUploadItem from '../FileUploadItem';

interface Props {
  field: any,
  error?: string,
  filesList: any,
}

const FilesUpload:React.FC<Props> = ({
  error,
  field,
  filesList,
}) => (
  <>
    <div className={'flex flex-col mb-4 items-center justify-center'}>
      <H2 customClasses='mb-4'>Uploaded Files</H2>
      <div
        className={'flex flex-auto flex-wrap justify-center mb-8'}
      >
        {filesList.map((item: any, key: number) => (
          <FileUploadItem
            key={key}
            item={item}
          />
        ))}
      </div>
      <div className={'border border-gray-400 border-solid w-full mb-8'}/>
      <H2 customClasses='mb-4'>Files prepared to upload</H2>
      <div className={'flex flex-auto mb-8'}>
        {field.files?.map((i: File, key: number) => (
          <span
            key={key}
            className={cx(
              'max-w-sm',
              'pb-2',
              'border',
              'mb-8',
              'border-transparent',
              'hover:border',
              'hover:border-gray-800',
              'hover:border-dotted',
              'mx-4',
              'cursor-pointer'
            )}
          >{i.name}</span>
        ))}
      </div>
    </div>
    <div className={'flex justify-center items-center'}>
      <FileUpload
        multiple
        field={field.bind()}
        error={error}
      />
    </div>
  </>
);

export default observer(FilesUpload);
