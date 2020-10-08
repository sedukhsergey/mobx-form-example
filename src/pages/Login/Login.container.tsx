import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import {
  RedirectRouter, RoutesList,
} from 'routes';

import form from './LoginForm';
import {
  Button,
  ErrorMessage,
  Card,
  Container,
  H1,
  Text,
} from 'components';

import { InputGroup } from 'modules';
import { useStore } from 'hooks/useStore';

const LoginContainer = () => {
  const { authStore: { isAuthenticated } } = useStore();

  useEffect(() => {
    if (isAuthenticated) {
      RedirectRouter.goToSplash();
    }
  }, [isAuthenticated]);
  return (
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
              looks={'primary'}
              onClick={form.onSubmit}
              disabled={!form.isValid}>
              Submit
            </Button>
            <ErrorMessage>{form.error}</ErrorMessage>
          </form>
        </div>
        <div>
          <Link to={RoutesList.registration}>
            <Text looks={'link'}>Or you&apos;re already have an account &#x21AA;</Text>
          </Link>
        </div>
      </Card>
    </Container>
  );
};

export default observer(LoginContainer);
