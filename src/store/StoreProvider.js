import React from 'react';
import { getStoreSnapshot } from './getStoreSnapshot';
const store = getStoreSnapshot();
export const storeContext = React.createContext(store);

export const StoreProvider = ({
  children, store,
}) => (
  <storeContext.Provider value={store}>{children}</storeContext.Provider>
);
