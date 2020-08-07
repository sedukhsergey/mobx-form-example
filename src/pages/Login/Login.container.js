import React from 'react';
import { Link } from 'react-router-dom';

import { RoutesList } from 'routes';

import form from './LoginForm';
import {
  Button, ErrorMessage, Input, Card, Container,
} from 'components';
const styles = {};
const LoginContainer = () => (
  <Container>
    <div className='d'>
      <div className={styles.container}>
        <h1 className='tracking-widest'>LoginView</h1>
        <h1 className='some'>LoginView</h1>
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <Input {...form.$('email').bind()} />
            <ErrorMessage>{form.$('email').error}</ErrorMessage>
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
    </div>
  </Container>
);

export default LoginContainer;
