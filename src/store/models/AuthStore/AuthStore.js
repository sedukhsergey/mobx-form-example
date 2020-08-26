import {
  types, getRoot,
} from 'mobx-state-tree';
import { RedirectRouter } from 'routes';
import { registrationAccount } from 'api';

const UiStore = types
  .model('AuthStore', { isAuthorized: types.optional(types.boolean, false) })
  .actions(self => ({
    setAuthorizedStatus(status) {
      self.isAuthorized = status;
    },
    async registration(data, form) {
      try {
        const response = await registrationAccount(data);
        console.log('res', response);
        // self.updateUserEmail('email');
        // getRoot(self).authStore.setAuthorizedStatus(true);
        // RedirectRouter.goToDashboard();
      } catch (err) {
        console.log('err', err);
        form.invalidate(err.data.message);
      }
    },
    logIn(email) {
      getRoot(self).userStore.updateUserEmail(email);
      self.setAuthorizedStatus(true);
      RedirectRouter.goToDashboard();
    },
    logOut() {
      getRoot(self).userStore.updateUserEmail(null);
      self.setAuthorizedStatus(false);
      RedirectRouter.goToLogin();
    },
  }));

export default UiStore;
