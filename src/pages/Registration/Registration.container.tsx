import React from 'react';
import { observer } from 'mobx-react';
import form from './RegistrationForm';
import {
  Button,
  ErrorMessage,
  Card,
  Container,
  H1,
} from 'components';

import { InputGroup } from 'modules';

const RegistrationContainer = () => (
  <Container
    looks={'center'}
    customClasses={'mx-4'}
    customStyles={{ height: '70vh' }}
  >
    <Card looks={'small default'}>
      <div>
        <H1>Registration</H1>
        <form>
          <div className={'flex flex-col mb-4'}>
            <InputGroup
              field={form.$('email').bind()}
              error={form.$('email').error}
            />
          </div>
          <div className={'flex flex-col mb-8'}>
            <InputGroup
              field={form.$('password').bind()}
              error={form.$('password').error}
            />
          </div>
          <div className={'flex flex-col mb-8'}>
            <InputGroup
              field={form.$('passwordConfirm').bind()}
              error={form.$('passwordConfirm').error}
            />
          </div>
          <Button
            type="submit"
            onClick={form.onSubmit}
            disabled={!form.isValid}>
            Submit
          </Button>
          <ErrorMessage>{form.error}</ErrorMessage>
        </form>
      </div>
    </Card>
  </Container>
);

export default observer(RegistrationContainer);
