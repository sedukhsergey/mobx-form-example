import React from 'react';
import { observer } from 'mobx-react';
import { form } from './RegistrationForm';
import { Input, ErrorMessage } from 'components';
import styles from './styles.module.css';

const RegistrationView = observer(() => {
  return (
    <div className={styles.container}>
      <h1>RegistrationView</h1>
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

        <button type="submit" onClick={form.onSubmit} disabled={!form.isValid}>
          Submit
        </button>
        <p>{form.error}</p>
      </form>
    </div>
  );
});

export default RegistrationView;
