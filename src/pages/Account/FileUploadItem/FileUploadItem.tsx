import React, { useState } from 'react';
import cx from 'classnames';
import Cancel from '../../../assets/images/cancel.svg';
import { action } from 'mobx';


type Props = {
  item: any
}


const FileUploadItem:React.FC<Props> = ({ item }) => {

  const [isHovered, setHovered] = useState(false);

  const destroyPreview = () => {
    action(() => {
      item.delete();
    })();
  };

  return (
    <div
      className={
        cx(
          'relative',
          'py-2',
          'pr-6',
          'border',
          'border-transparent',
          'hover:border',
          'hover:border-gray-800',
          'hover:border-dotted',
          'cursor-pointer'
        )
      }
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <img
        src={Cancel}
        alt="close"
        onClick={destroyPreview}
        className={
          cx(
            `
            absolute
            right-0
            top-4
            w-8
            hover:cursor-pointer
            p-2
          `,
            { hidden: !isHovered }
          )
        }
      />
      <span
        className={cx(
          'max-w-sm',
          'mx-4',
          'p-4'
        )}
      >{item.file_type}</span>
    </div>
  );
};

export default FileUploadItem;
