/* eslint-disable */
import {
  types,
} from 'mobx-state-tree';


const AccountSessionData = types
  .model('AccountSessionData', {
    name: types.optional(types.string, ''),
  })
  .actions(self => ({

  }));

export default AccountSessionData;
