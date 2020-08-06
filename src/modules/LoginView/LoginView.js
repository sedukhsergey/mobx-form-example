import React from 'react';
import {
  observer,
} from 'mobx-react';
import {
  form,
} from './LoginForm';
import {
  Input, ErrorMessage, Button,
} from 'components';
import styles from './styles.module.css';

const LoginView = () => (
  <div className={styles.container}>
    <h1>LoginView</h1>
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
);

export default observer(LoginView);
