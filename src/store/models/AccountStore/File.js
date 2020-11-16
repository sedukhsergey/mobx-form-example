/* eslint-disable */
import {
  getParent, getRoot,
  types,
} from 'mobx-state-tree';

import {
  deleteAccountFile,
} from 'api';



const File = types
  .model('File', {
    id: types.frozen(types.string),
    file_name: types.optional(types.string, ''),
    file_type: types.optional(types.string, ''),
    file_enc: types.optional(types.string, ''),
    file: types.optional(types.string, ''),
  })
  .actions(self => ({
    async delete() {
      try {
        const { accessToken } = getRoot(self).authStore;
        await deleteAccountFile(accessToken, self.id)
        getParent(self, 2).delete(self);
      } catch(err) {
        console.log('err',err)
      }
    },
  }));

export default File;
