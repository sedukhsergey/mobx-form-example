import { useObserver } from 'mobx-react';
import { useStore } from './useStore';

export const useWishListData = () => {
  const store = useStore();
  return useObserver(() => store.wishListStore);
};
