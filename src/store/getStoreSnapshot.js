import { initStore } from './root';

export const getStoreSnapshot = () => {
  const auth = JSON.parse(localStorage.getItem('authStatus'));
  const authStore = {};
  if (auth?.isLogin) {
    authStore.isAuthorized = true;
  }
  return initStore({ authStore });
};
