import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import {
  Container, H2, Button, FileUpload, Text,
} from 'components';
import { useStore } from 'hooks/useStore';
import PhotoUpload from './PhotoUpload';
import form from './PhotoUpload/PhotoUploadForm';

const Account = () => {
  const { accountStore: { localAccount: { accountData: { photo } } } } = useStore();

  useEffect(() => {
    form.set({ photos: [photo] });
    form.$('photos').validate();
  }, [photo]);

  return (
    <Container>
      <div className='bg-white p-4'>
        <H2 customClasses='mb-4'>Personal data</H2>
        <div className='flex justify-between flex-col'>
          <PhotoUpload form={form}/>
          <FileUpload
            multiple
            field={form.$('demo')}
            error={form.$('demo').errorSync}
          />
          <div className={'max-w-xs w-full my-0 mx-auto'}>
            <Button
              type="submit"
              looks={'primary'}
              onClick={form.onSubmit}
              disabled={!form.isValid}
            >
              Submit
            </Button>
          </div>
        </div>
        <Text looks={'error'}>{form.error}</Text>
      </div>
    </Container>
  );
};

export default observer(Account);
