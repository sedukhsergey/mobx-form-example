import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';
import Form from 'mobx-react-form';
import RedirectRouter from 'utils/RedirectRouter';

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

const registerRule = (rules, validator) => {
  Object.keys(rules).forEach((key) =>
    validator.register(key, rules[key].function, rules[key].message),
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
  },
];

const hooks = {
  onSuccess(form) {
    // get field values;
    try {
      const user = JSON.parse(localStorage.getItem('auth'));
      if (!user) {
      }
      if (form.values().email === user.email && form.values().password) {
        localStorage.setItem(
          'auth',
          JSON.stringify({
            isLogin: true,
            email: form.values().email,
            password: form.values().password,
          }),
        );
        RedirectRouter.goToDashboard();
      }
      console.log('form', form);
    } catch (err) {
      console.error('error message', err);
    }
  },
  onError(form) {
    alert('Form has errors!');
    // get all form errors
    console.log('All form errors', form.errors());
  },
};

// const options = {
//    'couponCode': {
//     validateOnChange: true,
//   },
// }

export const form = new Form({ fields }, { plugins, hooks });
