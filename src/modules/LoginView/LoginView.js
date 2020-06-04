import React from 'react';
import { observer } from 'mobx-react';
import { form } from './LoginForm';
import styles from './styles.module.css';

const LoginView = observer(() => {
  return (
    <>
      <h1>LoginView</h1>
      <form>
        <div>
          <label htmlFor={form.$('email').id}>{form.$('email').label}</label>
          <input {...form.$('email').bind()} />
          <p>{form.$('email').error}</p>
        </div>
        <div>
          <label htmlFor={form.$('password').id}>{form.$('password').label}</label>
          <input {...form.$('password').bind()} />
          <p>{form.$('password').error}</p>
        </div>

        <button type="submit" onClick={form.onSubmit}>
          Submit
        </button>
        <button type="button" onClick={form.onClear}>
          Clear
        </button>
        <button type="button" onClick={form.onReset}>
          Reset
        </button>

        <p>{form.error}</p>
      </form>
    </>
  );
});

export default LoginView;
