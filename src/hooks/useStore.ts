import { useContext } from 'react';
import { storeContext } from '../store/StoreProvider';
import {
  AuthStore,
  UserStore,
  UiStore,
  GroupStore,
  WishListStore,
} from 'store/StoreTypes';

type Store = {
  authStore: AuthStore,
  userStore: UserStore,
  dashboardStore: UiStore,
  usersStore: GroupStore,
  wishListStore: WishListStore,
}

export const useStore = () => useContext(storeContext);

