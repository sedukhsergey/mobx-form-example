import { types } from 'mobx-state-tree';

const UserData = types
  .model('UserData', {
    email: types.maybeNull(types.string),
    id: types.maybeNull(types.number),
  })
  .actions(self => ({
    setEmail(email) {
      self.email = email;
    },
    setAccountData(data) {
      Object.keys(data).forEach(item => {
        self[item] = data[item];
      });
    },
  }));

export default UserData;
