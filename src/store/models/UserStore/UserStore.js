import { types } from 'mobx-state-tree';

import UserData from './UserData';


const UserStore = types
  .model('UserStore', { userData: types.optional(UserData, {}) })
  .actions(self => ({

    updateUserEmail(email) {
      self.userData.setEmail(email);
    },
  }));

export default UserStore;
