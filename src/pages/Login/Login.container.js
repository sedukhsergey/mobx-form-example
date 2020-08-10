import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { RoutesList } from 'routes';

import form from './LoginForm';

import {
  Button,
  ErrorMessage,
  Input,
  Card,
  Container,
  H1,
} from 'components';

import { InputGroup } from 'modules';

const styles = {};
const email = form.$('email').bind();
console.log('email', email);
const LoginContainer = () => (
  <Container
    looks={'center'}
    customClasses={'mx-4'}
    customStyles={{ height: '70vh' }}
  >
    <Card looks={'small default'}>
      <div className={styles.container}>
        <H1>Login View</H1>
        <form>
          <div className={styles.inputContainer}>
            <InputGroup
              field={form.$('email').bind()}
              error={form.$('email').error}
            />
            {/*<Label id={form.$('email').bind().id}>{form.$('email').bind().label}</Label>*/}
            {/*<Input {...form.$('email').bind()} />*/}
            {/*<ErrorMessage>{form.$('email').error}</ErrorMessage>*/}
          </div>
          <div className={styles.inputContainer}>
            <Input {...form.$('password').bind()} />
            <ErrorMessage>{form.$('password').error}</ErrorMessage>
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
      <div className={styles.linkContainer}>
        <Link to={RoutesList.registration}>
          <span>Or you&apos;re already have an account &#x21AA;</span>
        </Link>
      </div>
    </Card>
  </Container>
);

export default observer(LoginContainer);
