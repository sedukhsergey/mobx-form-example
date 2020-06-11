import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';
import Form from 'mobx-react-form';
import RedirectRouter from '../../utils/RedirectRouter';

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
  },
  {
    name: 'passwordConfirm',
    label: 'Password Confirmation',
    placeholder: 'Confirm Password',
    rules: 'required|string|same:password',
  },
];

const hooks = {
  onSuccess(form) {
    // get field values
    localStorage.setItem('user', JSON.stringify({ isLogin: true }));
    RedirectRouter.goToDashboard();
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
