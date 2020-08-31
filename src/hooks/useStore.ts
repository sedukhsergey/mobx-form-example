import { useContext } from 'react';
import { storeContext } from '../store/StoreProvider';
import {
  AuthStore,
  GroupStore,
  WishListStore,
} from 'store/StoreTypes';

type Store = {
  authStore: AuthStore,
  usersStore: GroupStore,
  wishListStore: WishListStore,
}

export const useStore = () => useContext(storeContext);

