import { initStore } from 'store';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';
import Form from 'mobx-react-form';

const rules = {};

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
    name: 'files',
    type: 'file',
  }
];

const hooks = {
  async onSuccess(form) {
    try {
      // eslint-disable-next-line max-len
      const { accountStore: { localAccount: { accountData: { updateAccountFile } } } } = initStore();

      if (form.$('files').files) {

        const data = new FormData();

        form.$('files').files.forEach((item, index) => {
          data.append(`file-${index}`, item);
        });

        updateAccountFile(data, form);
      }

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
