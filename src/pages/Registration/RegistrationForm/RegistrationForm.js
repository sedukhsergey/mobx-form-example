import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';
import Form from 'mobx-react-form';
import { initStore } from 'store';

const plugins = { dvr: dvr({ package: validatorjs }) };

const fields = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Insert Email',
    rules: 'required|email|string|between:5,50',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Insert Password',
    rules: 'required|string|between:5,50',
    type: 'password',
  },
  {
    name: 'passwordConfirm',
    label: 'Password Confirmation',
    placeholder: 'Confirm Password',
    rules: 'required|string|same:password',
    type: 'password',
  }
];

const hooks = {
  onSuccess(form) {
    try {
      const { authStore: { registration } } = initStore();
      registration({
        email: form.values().email,
        password: form.values().password,
      }, form);
    } catch (err) {
      console.error('error message', err);
    }
  },
  onError() {
    alert('Form has errors!');
  },
};

const form = new Form(
  { fields },
  {
    plugins,
    hooks,
  }
);

export default form;
