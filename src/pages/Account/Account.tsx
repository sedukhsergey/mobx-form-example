import React, {
  ChangeEvent, useEffect,
} from 'react';
import { observer } from 'mobx-react';
import {
  Container, H2, Button, Text,
} from 'components';
import { useStore } from 'hooks/useStore';
import PhotoUpload from './PhotoUpload';
import FilesUpload from './FilesUpload';
import protoForm from './Forms/PhotoUploadForm';
import filesForm from './Forms/FilesUploadForm';
import useAccountData from './hooks/useAccountData';
import useFiles from './hooks/useFiles';

const Account = () => {
  const {
    accountStore: {
      localAccount: {
        accountData: {
          photo,
          saveToStoreSession,
        },
      },
    },
  } = useStore();

  const [name, setData] = useAccountData();
  const [files] = useFiles();
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
              filesList={files}
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
      <div className={'mt-8'}>
        <input
          className={'border border-gray-800'}
          type="text"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setData(e.target.value);
          }}
        />
        <br/>
        <Button
          type="submit"
          looks={'primary'}
          onClick={() => saveToStoreSession(name)}
        >
          Submit
        </Button>
        <br/>
      </div>
    </Container>
  );
};

export default observer(Account);
