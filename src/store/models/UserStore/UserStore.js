import {
  types, getRoot
} from 'mobx-state-tree';
import RedirectRouter from 'utils/RedirectRouter';
import UserData from './UserData';

const UserStore = types
  .model('UserStore', {
    userData: types.optional(UserData, {
    }),
  })
  .actions(self => ({
    createUser({
      email, password,
    }) {
      localStorage.setItem('user',
        JSON.stringify({
          email,
          password,
        }));
      self.updateUserEmail(email);
      getRoot(self).authStore.setAuthorizedStatus(true);
      RedirectRouter.goToDashboard();
    },
    updateUserEmail(email) {
      self.userData.setEmail(email);
    },
  }));

export default UserStore;
