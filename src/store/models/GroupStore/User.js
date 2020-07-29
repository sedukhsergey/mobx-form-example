import {
  types
} from 'mobx-state-tree';
import {
  WishListStore
} from '../index';

const User = types.model({
  id: types.number,
  name: types.string,
  gender: types.enumeration('gender', ['f', 'm']),
  wishList: types.optional(WishListStore, {
  }),
});

export default User;
