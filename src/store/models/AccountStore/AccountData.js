import {
  getRoot, types,
} from 'mobx-state-tree';
import { updateAccountData } from 'api';
const AccountData = types
  .model('AccountData', {
    // eslint-disable-next-line
    id: types.frozen(types.string),
    email: types.frozen(types.string),
    name: types.maybeNull(types.string),
    photo: types.maybeNull(types.string),
  })
  .actions(self => ({
    async updateAccountData(data, form) {
      console.log('try', data);
      try {
        const { accessToken } = getRoot(self).authStore;
        await updateAccountData(accessToken, data);
      } catch (err) {
        form.invalidate(err.data ? err.data.message : err.message);
      }
    },
  }));

export default AccountData;
