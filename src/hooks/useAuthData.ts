import { useObserver } from 'mobx-react';
import { useStore } from './useStore';
import { AuthStore } from 'store/StoreTypes';

export const useAuthData = (): AuthStore => {
  const store = useStore();
  return useObserver(() => store.authStore);
};
