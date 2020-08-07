import { types } from 'mobx-state-tree';
import User from './User';

const initialState = {
  '1': {
    id: 1,
    name: 'Bob',
    gender: 'f',
  },
  '2': {
    id: 2,
    name: 'Slag',
    gender: 'm',
  },
};

const GroupStore = types
  .model({ users: types.map(User) })
  .actions(self => ({
    createItems(items) {
      self.users = items;
    },
    async fetchUsers() {
      try {
        setTimeout(() => {
          this.createItems(initialState);
        }, 100);
      } catch (e) {
        console.error('fetch users error', e);
      }
    },
  }));

export default GroupStore;
