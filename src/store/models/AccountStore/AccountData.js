import { types } from 'mobx-state-tree';

const AccountData = types
  .model('AccountData', {
    // eslint-disable-next-line
    id: types.frozen(types.string),
    email: types.frozen(types.string),
    name: types.maybeNull(types.string),
    photo: types.maybeNull(types.string),
  });

export default AccountData;
