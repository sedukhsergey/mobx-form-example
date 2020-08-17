import { useObserver } from 'mobx-react';
import { useStore } from './useStore';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useGroupData = () => {
  const store = useStore();
  return useObserver(() => store.usersStore);
};
