import React from 'react';
import { observer } from 'mobx-react';
import {
  Container, H2, Button,
} from 'components';
import PhotoUpload from './PhotoUpload';
import form from './PhotoUpload/PhotoUploadForm';

const Account = () => (
  <Container>
    <div className='bg-white p-4'>
      <H2 customClasses='mb-4'>Personal data</H2>
      <div className='flex justify-between flex-col'>
        <PhotoUpload form={form}/>
        <div className={'max-w-xs w-full my-0 mx-auto'}>
          <Button
            type="submit"
            looks={'primary'}
            onClick={form.onSubmit}
            disabled={!form.isValid}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  </Container>
);

export default observer(Account);
