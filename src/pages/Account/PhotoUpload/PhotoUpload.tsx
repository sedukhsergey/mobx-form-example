import React from 'react';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import { FileUpload } from 'components';
// import form from './PhotoUploadForm';

interface Props {
  form: any,
}

const PhotoUpload:React.FC<Props> = ({ form }) => {
  const files = form.$('photo').files;
  const field = form.$('photo');

  const destroyPreview = (file: any, field:any) => (e:any) => {
    e.preventDefault();
    window.URL.revokeObjectURL(file.preview);
    const index = field.files.indexOf(file);
    action(() => field.files.splice(index, 1))();
  };

  const createPreview = (file:any) => window.URL.createObjectURL(file);
  return (
    <div className={'flex flex-col items-center justify-center'}>
      <div className={'md:flex md:justify-end md:items-end'}>
        {(files && files.length ? (
          <div
            className={'mb-4'}
          >{files.map((file: any) =>
              <button
                key={file.name}
                onClick={destroyPreview(file, field)}
              >
                <img
                  className="w-10/12 my-0 mx-auto"
                  src={createPreview(file)}
                  alt={file.name}
                />
              </button>)}
          </div>
        ) : null)}
        <div className={'flex justify-center'}>
          <FileUpload
            field={field}
            error={form.$('photo').error}
          />
        </div>
      </div>
      <div>
        <p className={'text-purple text-opacity-50'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Placeat, recusandae.
        </p>
      </div>
    </div>
  );
};

export default observer(PhotoUpload);
