import { types } from 'mobx-state-tree';

const AccountData = types
  .model('AccountData', {
    // eslint-disable-next-line
    acc_id: types.frozen(types.number),
    email: types.frozen(types.string),
  });

export default AccountData;
