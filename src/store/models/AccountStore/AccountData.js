import {
  destroy,
  getRoot, types,
} from 'mobx-state-tree';
import {
  updateAccountData,
  updateAccountFile,
  fetchAllFiles,
  getAccountSettingsSession,
  saveNameToSession,
} from 'api';
import File from './File';
import AccountSessionData from './AccountSessionData';


const AccountData = types
  .model('AccountData', {
    // eslint-disable-next-line
    id: types.frozen(types.string),
    email: types.frozen(types.string),
    name: types.maybeNull(types.string),
    sessionData: types.maybeNull(AccountSessionData),
    photo: types.maybeNull(types.string),
    files:  types.optional(types.array(File), []),
  })
  .actions(self => ({
    async updateAccountData(data, form) {
      try {
        const { accessToken } = getRoot(self).authStore;
        await updateAccountData(accessToken, data);
      } catch (err) {
        form.invalidate(err.data ? err.data.message : err.message);
      }
    },
    async saveToStoreSession(name) {
      try {
        const { accessToken } = getRoot(self).authStore;
        await saveNameToSession(accessToken, name);
      } catch (e) {
        console.error('saveToServerSession', e);
      }
    },

    async getAccountSettingsSession() {
      try {
        const { accessToken } = getRoot(self).authStore;
        const response = await getAccountSettingsSession(accessToken);
        self.setSessionData(response);
      } catch (err) {
        console.error('getAccountSettingsSession err', err);
      }
    },
    setSessionData(data) {
      self.sessionData = data;
    },
    async updateAccountFile(data, form) {
      try {
        const { accessToken } = getRoot(self).authStore;
        const { fileUrls } = await updateAccountFile(accessToken, data);
        self.setFiles([...self.files, ...fileUrls]);
        form.reset();
      } catch (err) {
        form.invalidate(err.data ? err.data.message : err.message);
      }
    },

    async getAllFiles() {
      try {
        const { accessToken } = getRoot(self).authStore;
        const response = await fetchAllFiles(accessToken);
        self.setFiles(response.result);
      } catch (err) {
        console.error('err', err);
      }
    },
    setFiles(files) {
      self.files = files;
    },

    delete(item) {
      destroy(item);
    },
  }))
  .views(self => ({}));

export default AccountData;
