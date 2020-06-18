import { initStore } from 'store';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';
import Form from 'mobx-react-form';

const rules = {
  couponCode: {
    function: (value) => /^[a-zA-Z]+$/.test(value),
    message: 'The :attribute should contain only latin letters',
  },
  uppercase: {
    function: (value) => value.match(/^[A-Z]*$/),
    message: 'The :attribute should be only in uppercase',
  },
};

const registerRule = (formRules, validator) => {
  Object.keys(formRules).forEach((key) =>
    validator.register(key, formRules[key].function, formRules[key].message),
  );
};

const plugins = {
  dvr: dvr({
    package: validatorjs,
    extend: ({ validator }) => registerRule(rules, validator),
  }),
};

const fields = [
  // {
  //   name: 'couponCode',
  //   label: 'Coupon Code',
  //   placeholder: 'Insert Coupon Code',
  //   rules: 'couponCode|uppercase',
  //   options: {
  //     validateOnChange: true,
  //   }
  // },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'Insert Email',
    rules: 'required|email|string',
  },
  {
    name: 'password',
    label: 'Password',
    placeholder: 'Insert Password',
    rules: 'required|string|min:5',
    type: 'password',
  },
];

const hooks = {
  onSuccess(form) {
    // get field values;
    const {
      authStore: { logIn },
    } = initStore();
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        form.invalidate("User with this email doesn't exist");
        return;
      }
      if (form.values().email !== user.email || form.values().password !== user.password) {
        form.invalidate('Incorrect email or password');
        return;
      }
      if (form.values().email === user.email && form.values().password === user.password) {
        logIn({
          email: form.values().email,
          password: form.values().password,
        });
      }
    } catch (err) {
      console.error('error message', err);
    }
  },
  onError(form) {
    alert('Form has errors!');
    // get all form errors
  },
};

// const options = {
//    'couponCode': {
//     validateOnChange: true,
//   },
// }

export const form = new Form({ fields }, { plugins, hooks });
