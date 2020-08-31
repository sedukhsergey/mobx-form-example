import { types } from 'mobx-state-tree';
import AccountData from './AccountData';

const Account = types
  .model('Account', { accountData: types.maybeNull(AccountData) });

export default Account;
