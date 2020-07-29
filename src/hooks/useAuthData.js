import {
  useObserver
} from 'mobx-react';
import {
  useStore
} from './useStore';

export const useAuthData = () => {
  const store = useStore();
  return useObserver(() => store.authStore);
};
