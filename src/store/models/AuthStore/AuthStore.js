import {
  types, getRoot,
} from 'mobx-state-tree';
import { RedirectRouter } from 'routes';
import {
  registrationAccount, loginAccount,
} from 'api';
import {
  getCookie, deleteCookie,
} from 'utils/Cookies';

const AuthStore = types
  .model('AuthStore', { accessToken: types.optional(types.string, '') })
  .views(self => ({
    get isAuthenticated() {
      return self.accessToken !== '';
    },
  }))
  .actions(self => ({
    setAccessToken() {
      const accessToken = getCookie('accessToken');
      console.log('get cookie accessToken', accessToken);
      if (accessToken) {
        self.accessToken = accessToken;
      } else {
        self.clearAccessToken();
      }
    },
    clearAccessToken() {
      self.accessToken = '';
      deleteCookie('accessToken');
    },
    async registration(data, form) {
      try {
        await registrationAccount(data);
        self.setAccessToken();
        RedirectRouter.goToDashboard();
      } catch (err) {
        form.invalidate(err.message);
      }
    },
    async logIn(data, form) {
      try {
        const token = await loginAccount(data);
        self.setAccessToken();
        RedirectRouter.goToDashboard();
      } catch (err) {
        form.invalidate(err.message);
      }
    },
    logOut() {
      getRoot(self).accountStore.deleteAccount(getRoot(self).country);
      self.clearAccessToken();
      RedirectRouter.goToLogin();
    },
  }));

export default AuthStore;
