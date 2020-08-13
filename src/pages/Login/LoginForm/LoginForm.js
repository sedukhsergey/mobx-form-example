import { initStore } from 'store';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';
import Form from 'mobx-react-form';

const rules = {
  couponCode: {
    function: () => value => /^[a-zA-Z]+$/.test(value),
    message: 'The :attribute should contain only latin letters',
  },
  uppercase: {
    function: () => value => value.match(/^[A-Z]*$/),
    message: 'The :attribute should be only in uppercase',
  },
  // firstName: {
  //   function: (form) => (value) => {
  //     const fieldLength = (form.$('name').fields.get('lastName').value + value).length
  //     console.log('fieldLength',fieldLength)
  //     if (fieldLength >= 10) {
  //       return false;
  //     }
  //     return true
  //   },
  //   message: 'invalid'
  // },
  // lastName: {
  //   function: (form) => (value) => {
  //     const fieldLength = (form.$('name').fields.get('firstName').value + value).length
  //     console.log('fieldLength',fieldLength)
  //     if (fieldLength >= 10) {
  //       return false;
  //     }
  //     return true
  //   },
  //   message: 'invalid'
  // }
};

const registerRule = (formRules, validator, form) => {
  Object.keys(formRules).forEach(key =>
    validator.register(key, formRules[key].function(form), formRules[key].message)
  );
};

const plugins = {
  dvr: dvr({
    package: validatorjs,
    extend: ({
      validator, form,
    }) => registerRule(rules, validator, form),
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
  }
  // {
  //   name: 'name',
  //   label: 'some name',
  //   fields: [
  //     {
  //       name: 'firstName',
  //       label: 'first name',
  //       placeholder: 'first name',
  //       rules: 'firstName',
  //     },
  //     {
  //       name: 'lastName',
  //       label: 'last name',
  //       placeholder: 'last name',
  //       rules: 'lastName',
  //     }
  //   ],
  //   validateOnChange: true,
  // }
];

const hooks = {
  onSuccess(form) {
    // get field values;
    const { authStore: { logIn } } = initStore();
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        form.invalidate('User with this email doesn\'t exist');
        return;
      }
      if (
        form.values().email !== user.email ||
        form.values().password !== user.password
      ) {
        form.invalidate('Incorrect email or password');
        return;
      }
      if (
        form.values().email === user.email &&
        form.values().password === user.password
      ) {
        logIn({
          email: form.values().email,
          password: form.values().password,
        });
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

const form = new Form(
  { fields },
  {
    plugins,
    hooks,
  }
);

export default form;
