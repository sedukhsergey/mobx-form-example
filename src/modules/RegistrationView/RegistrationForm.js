import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';
import Form from 'mobx-react-form';
import {
  initStore
} from 'store';

const plugins = {
  dvr: dvr({
    package: validatorjs,
  }),
};

const fields = [
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Insert Email',
    rules: 'required|email|string|between:5,25',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Insert Password',
    rules: 'required|string|between:5,25',
    type: 'password',
  },
  {
    name: 'passwordConfirm',
    label: 'Password Confirmation',
    placeholder: 'Confirm Password',
    rules: 'required|string|same:password',
    type: 'password',
  },
];

const hooks = {
  onSuccess(form) {
    // get field values
    try {
      const { userStore: { createUser }, } = initStore();
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        createUser({
          email: form.values().email,
          password: form.values().password,
        });
        return;
      }
      if (form.values().email === user.email) {
        form.invalidate('User with this email already exist');
        return;
      }
    } catch (err) {
      console.error('error message', err);
    }
  },
  onError() {
    alert('Form has errors!');
    // get all form errors
  },
};

// const options = {
//    'couponCode': {
//     validateOnChange: true,
//   },
// }

export const form = new Form({
  fields
}, {
  plugins, hooks
});
