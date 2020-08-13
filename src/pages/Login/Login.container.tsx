import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { RoutesList } from 'routes';

import form from './LoginForm';

import {
  Button,
  ErrorMessage,
  Card,
  Container,
  H1,
} from 'components';

import { InputGroup } from 'modules';


const LoginContainer = () => (
  <Container
    looks={'center'}
    customClasses={'mx-4'}
    customStyles={{ height: '70vh' }}
  >
    <Card looks={'small default'}>
      <div>
        <H1>Login View</H1>
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
          <Button
            type="submit"
            onClick={form.onSubmit}
            disabled={!form.isValid}>
            Submit
          </Button>
          <ErrorMessage>{form.error}</ErrorMessage>
        </form>
      </div>
      <div>
        <Link to={RoutesList.registration}>
          <span>Or you&apos;re already have an account &#x21AA;</span>
        </Link>
      </div>
    </Card>
  </Container>
);

export default observer(LoginContainer);
