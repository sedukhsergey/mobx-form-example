import { initStore } from './root';

export const getStoreSnapshot = () => {
  const auth = JSON.parse(localStorage.getItem('authStatus'));
  let store;
  const authStore = {};
  if (auth?.isLogin) {
    authStore.isAuthorized = true;
  }
  store = initStore({
    authStore,
  });
  return store;
};
