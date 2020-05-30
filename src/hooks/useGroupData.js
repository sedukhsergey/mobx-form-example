import { useObserver } from 'mobx-react';
import { useStore } from './useStore';

export const useGroupData = () => {
  const store = useStore();
  return useObserver(() => store.usersStore);
};
