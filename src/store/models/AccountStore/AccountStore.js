import {
  getRoot, types,
} from 'mobx-state-tree';
import Response from 'utils/Response';
import Account from './Account';
import { fetchAccount } from 'api';

const AccountStore = types
  .model('AccountStore', { accounts: types.map(Account) })
  .views(self => ({

    get localAccount() {
      return self.accounts.get(getRoot(self).country);
    },
  }))
  .actions(self => ({
    deleteAccount(country) {
      self.accounts.delete(country);
    },
    setAccount(country, data) {
      self.accounts.set(country, {
        ...self.accounts.get(country),
        ...data,
      });
    },
    async fetchAccount() {
      try {
        const { accessToken } = getRoot(self).authStore;
        const response = await fetchAccount(accessToken);
        if (response.status === Response.STATUS_NO_CONTENT) {
          getRoot(self).authStore.logOut();
          return;
        }
        self.setAccount(getRoot(self).country, { accountData: response.data });
      } catch (err) {
        getRoot(self).authStore.logOut();
      }
    },
  }));

export default AccountStore;
