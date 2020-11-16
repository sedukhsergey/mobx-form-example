import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import {
  Container, H2, Button, Text,
} from 'components';
import { useStore } from 'hooks/useStore';
import PhotoUpload from './PhotoUpload';
import FilesUpload from './FilesUpload';
import protoForm from './Forms/PhotoUploadForm';
import filesForm from './Forms/FilesUploadForm';


function b64toBlob(b64Data: string, contentType: string, sliceSize?: number) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);


    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
}

const Account = () => {
  const {
    accountStore: {
      localAccount: {
        accountData: {
          files,
          photo,
          filesList,
          getAllFiles,
        },
      },
    },
  } = useStore();
  useEffect(() => {
    getAllFiles();
  }, [getAllFiles]);

  useEffect(() => {
    protoForm.set({ photos: [photo] });
    protoForm.$('photos').validate();
  }, [photo]);

  return (
    <Container>
      <div className='bg-white p-4'>
        <H2 customClasses='mb-4'>Personal data</H2>
        <div className='flex justify-between flex-col'>
          <PhotoUpload
            field={protoForm.$('file').bind()}
            photos={protoForm.$('photos')}
            error={protoForm.$('photos').errorSync}
          />
          <p className={'text-purple text-opacity-50 w-full text-center mb-4'}>
            Select the photo for your personal account
          </p>
          <div className={'max-w-xs w-full my-0 mb-4 mx-auto'}>
            <Button
              type="submit"
              looks={'primary'}
              onClick={protoForm.onSubmit}
              disabled={!protoForm.isValid}
            >
              Send Photos
            </Button>
          </div>
          <div className={'border border-gray-400 border-solid w-full mb-8'}/>
          <div>
            <FilesUpload
              filesList={filesList}
              field={filesForm.$('files')}
              error={filesForm.$('files').errorSync}
            />
          </div>
          <div className={'max-w-xs w-full my-0 mb-4 mx-auto'}>
            <Button
              type="submit"
              looks={'primary'}
              onClick={filesForm.onSubmit}
              disabled={!filesForm.isValid}
            >
              Send Files
            </Button>
          </div>
        </div>
        <Text looks={'error'}>{filesForm.error}</Text>
      </div>
    </Container>
  );
};

export default observer(Account);
