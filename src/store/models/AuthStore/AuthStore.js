import {
  types, getRoot,
} from 'mobx-state-tree';
import { RedirectRouter } from 'routes';
import {
  registrationAccount, loginAccount,
} from 'api';
import {
  getCookie, deleteCookie, createCookie,
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
        const {
          id, token,
        } = await registrationAccount(data);
        createCookie('acc_id', id);
        createCookie('accessToken', token);
        self.setAccessToken();
        RedirectRouter.goToDashboard();
      } catch (err) {
        form.invalidate(err.data ? err.data.message : err.message);
      }
    },
    async logIn(data, form) {
      try {
        const {
          id, token,
        } = await loginAccount(data);
        createCookie('acc_id', id);
        createCookie('accessToken', token);
        self.setAccessToken();
        RedirectRouter.goToDashboard();
      } catch (err) {
        form.invalidate(err.data ? err.data.message : err.message);
      }
    },
    logOut() {
      getRoot(self).accountStore.deleteAccount(getRoot(self).country);
      self.clearAccessToken();
      RedirectRouter.goToLogin();
    },
  }));

export default AuthStore;
