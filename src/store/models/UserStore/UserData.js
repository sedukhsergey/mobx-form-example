import { types } from 'mobx-state-tree';

const UserData = types
  .model('UserData', { email: types.maybeNull(types.string) })
  .actions(self => ({
    setEmail(email) {
      self.email = email;
    },
  }));

export default UserData;
