import { types, getRoot } from 'mobx-state-tree';
import RedirectRouter from 'utils/RedirectRouter';

const UiStore = types
  .model('AuthStore', {
    isAuthorized: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    setAuthorizedStatus(status) {
      self.isAuthorized = status;
    },
    logIn({ email }) {
      getRoot(self).userStore.updateUserEmail(email);
      self.setAuthorizedStatus(true);
      RedirectRouter.goToDashboard();
    },
    logOut() {
      getRoot(self).userStore.updateUserEmail(null);
      self.setAuthorizedStatus(false);
      RedirectRouter.goToLogin();
    },
  }))
  .views((self) => ({}));

export default UiStore;