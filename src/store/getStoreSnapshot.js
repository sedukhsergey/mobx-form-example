import { initStore } from './root';
import { getCookie } from 'utils/Cookies';

export const getStoreSnapshot = () => {
  const accessToken = getCookie('accessToken');
  const authStore = {};
  if (accessToken) {
    authStore.accessToken = accessToken;
    authStore.isAuthenticated = true;
  }
  return initStore({ authStore });
};
