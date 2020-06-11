import React from 'react';
import { observer } from 'mobx-react';
import { form } from './LoginForm';
import { Input, ErrorMessage } from 'components';
import styles from './styles.module.css';

const LoginView = () => {
  return (
    <div className={styles.container}>
      <h1>LoginView</h1>
      <form>
        <div className={styles.inputContainer}>
          <Input
            name={form.$('email').id}
            label={form.$('email').label}
            {...form.$('email').bind()}
          />
          <ErrorMessage>{form.$('email').error}</ErrorMessage>
        </div>
        <div className={styles.inputContainer}>
          <Input
            type={'password'}
            name={form.$('password').id}
            label={form.$('password').label}
            {...form.$('password').bind()}
          />
          <ErrorMessage>{form.$('password').error}</ErrorMessage>
        </div>
        <button
          type="submit"
          onClick={form.onSubmit}
          disabled={!form.isValid}
          className={styles.submit}
        >
          Submit
        </button>
        <p>{form.error}</p>
      </form>
    </div>
  );
};

export default observer(LoginView);
