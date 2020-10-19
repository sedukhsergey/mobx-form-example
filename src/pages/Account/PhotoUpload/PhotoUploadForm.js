import { initStore } from 'store';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';
import Form from 'mobx-react-form';

const rules = {
  emptyPhoto: {
    function: () => value => {
      if (value[0] === null) {
        return false;
      }
      return true;
    },
    message: '',
  },
  photosMaxSize: {
    function: () => value => {
      console.log('value', value);
      if (!value.length) {
        return true;
      }
      if (!value[0]) {
        return true;
      }
      const base64str = value[0].substring(value[0].indexOf(';base64,') + 8);
      const decoded = window.atob(base64str);
      if (decoded.length >= 20120) {
        return false;
      }
      return true;
    },
    message: 'File size should be less than 20mb',
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
    name: 'photos',
    value: [],
    rules: 'emptyPhoto|photosMaxSize',
    validateOnChange: true,
    validateOnInit: true,
  },
  {
    name: 'file',
    type: 'file',
  }

];

const hooks = {
  async onSuccess(form) {
    const { photos } = form.values();
    try {
      // eslint-disable-next-line max-len
      const { accountStore: { localAccount: { accountData: { updateAccountData } } } } = initStore();
      updateAccountData({ photo: photos[0] || null }, form);
    } catch (err) {
      form.invalidate(err.message);
    }
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
