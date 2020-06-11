import React from 'react';

export const storeContext = React.createContext(null);

export const StoreProvider = ({ children, store }) => {
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
};
