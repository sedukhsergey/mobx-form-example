import React from 'react';
import styles from './styles.module.css';
import form from './RegistrationForm';
import {
  Button, ErrorMessage, Input,
} from 'components';

const RegistrationContainer = () => (
  <div className={styles.container}>
    <h1>Registration</h1>
    <form className={styles.form}>
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
          name={form.$('password').id}
          label={form.$('password').label}
          {...form.$('password').bind()}
        />
        <ErrorMessage>{form.$('password').error}</ErrorMessage>
      </div>
      <div className={styles.inputContainer}>
        <Input
          name={form.$('passwordConfirm').id}
          label={form.$('passwordConfirm').label}
          {...form.$('passwordConfirm').bind()}
        />
        <ErrorMessage>{form.$('passwordConfirm').error}</ErrorMessage>
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

export default RegistrationContainer;
