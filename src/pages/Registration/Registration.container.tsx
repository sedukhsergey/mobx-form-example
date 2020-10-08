import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import form from './RegistrationForm';
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
import {
  RedirectRouter, RoutesList,
} from 'routes';

const RegistrationContainer = () => {
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
              looks={'primary'}
              onClick={form.onSubmit}
              disabled={!form.isValid}>
              Submit
            </Button>
            <ErrorMessage>{form.error}</ErrorMessage>
          </form>
        </div>
        <div>
          <Link to={RoutesList.login}>
            <Text looks={'link'}>return to log-in</Text>
          </Link>
        </div>
      </Card>
    </Container>
  );
};

export default observer(RegistrationContainer);
