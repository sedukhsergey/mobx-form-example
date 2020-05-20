import { useContext } from 'react';
import { storeContext } from '../store/StoreProvider';

export const useStore = () => useContext(storeContext);
