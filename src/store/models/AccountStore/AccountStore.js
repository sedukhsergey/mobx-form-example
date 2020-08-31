import { types } from 'mobx-state-tree';
import Account from './Account';

const AccountStore = types
  .model('AccountStore', { account: types.map(Account) })
  .actions(self => ({
    deleteAccount(country) {
      self.account.delete(country);
    },
    setAccount(country, data) {
      self.account.set(country, {
        ...self.account.get(country),
        ...data,
      });
    },
  }));

export default AccountStore;
