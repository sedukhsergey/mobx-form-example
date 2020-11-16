import {
  destroy,
  getRoot, types,
} from 'mobx-state-tree';
import {
  updateAccountData,
  updateAccountFile,
  fetchAllFiles,
} from 'api';
import File from './File';
const AccountData = types
  .model('AccountData', {
    // eslint-disable-next-line
    id: types.frozen(types.string),
    email: types.frozen(types.string),
    name: types.maybeNull(types.string),
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
  .views(self => ({
    get filesList() {
      return self.files;
    },
  }));

export default AccountData;
