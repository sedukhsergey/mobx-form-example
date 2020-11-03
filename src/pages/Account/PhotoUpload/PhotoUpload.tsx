import React, {
  ChangeEvent, useState,
} from 'react';
import { action } from 'mobx';
import cx from 'classnames';

import { observer } from 'mobx-react';
import { FileUpload } from 'components';
import Cancel from 'assets/images/cancel.svg';

interface Props {
  form: any,
}

const PhotoUpload:React.FC<Props> = ({ form }) => {
  const [isHovered, setHovered] = useState(false);

  const photos = form.$('photos');
  const field = form.$('demo');

  const destroyPreview = (index: number, photos:any, elem: any) => (e:any) => {
    e.preventDefault();
    action(() => {
      const values = photos.values();
      values.splice(index, 1);
      photos.set(values);
      photos.validate();
    })();
  };

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    if (e && e.currentTarget && e.currentTarget.files && e.currentTarget.files[0]) {
      const file = e.currentTarget.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        photos.set([reader.result]);
        photos.validate();
      };
      reader.onerror = error => {
        photos.invalidate(error);
      };
    }
  };

  return (
    <div className={'flex flex-col items-center justify-center'}>
      <div className={'flex justify-center flex-col'}>
        {(photos.value.length ? (
          <div
            className={'mb-4'}
          >{photos.value.map((photo: string, index: number) => (photo ? (
              <div
                className={
                  'relative' +
                  'py-2' +
                  'border border-transparent hover:border-gray-800 hover:border-dotted'
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
                  onClick={destroyPreview(index, photos, photo)}
                  className={
                    cx(
                      `
                    absolute
                    right-0
                    top-0
                    w-12
                    hover:cursor-pointer
                    p-4
                  `, { hidden: !isHovered }
                    )
                  }
                />
                <img
                  className="
                  w-10/12 my-0 mx-auto
                  md:w-2/5
                "
                  src={photo}
                  alt={'avatar'}
                />
              </div>
            ) : null)
            )}
          </div>
        ) : null)}
        <div className={'flex justify-center'}>
          <FileUpload
            customClasses={'custom-file-input'}
            onChange={handleChange}
            field={field}
            error={form.$('photos').errorSync}
          />
        </div>
      </div>
      <div>
        <p className={'text-red-500'}>{form.$('photos').errorSync}</p>
        <p className={'text-purple text-opacity-50'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Placeat, recusandae.
        </p>
      </div>
    </div>
  );
};

export default observer(PhotoUpload);
