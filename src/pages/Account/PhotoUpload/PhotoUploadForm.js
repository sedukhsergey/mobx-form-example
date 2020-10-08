import { initStore } from 'store';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';
import Form from 'mobx-react-form';

const rules = {
  photo: {
    function: () => value => {
      console.log('value', value);
      return true;
    },
    message: 'The :attribute should contain only latin letters',
  },
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
  {
    name: 'photo',
    type: 'file',
    // rules: 'photo',
    hooks: { onDrop: field => console.log('onDrop  field.files', field.files) },
  }
];

const hooks = {
  onSuccess(form) {
    console.log('form.values()', form.values());
    // try {
    //   const { authStore: { logIn } } = initStore();
    //   logIn({
    //     email: form.values().email,
    //     password: form.values().password,
    //   }, form);
    // } catch (err) {
    //   form.invalidate(err.message);
    // }
  },
  onError() {
    alert('Form has errors!');
    // get all form errors
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
