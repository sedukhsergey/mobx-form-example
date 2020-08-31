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
    try {
      const { authStore: { logIn } } = initStore();
      logIn({
        email: form.values().email,
        password: form.values().password,
      }, form);
    } catch (err) {
      form.invalidate(err.message);
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
