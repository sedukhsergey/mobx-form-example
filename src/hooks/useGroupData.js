import { useObserver } from 'mobx-react';
import { useStore } from './useStore';

export const useGroupData = () => {
  const store = useStore();
  console.log('store', store);
  return useObserver(() => store.usersStore);
};
