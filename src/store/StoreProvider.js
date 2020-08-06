import React from 'react';

export const storeContext = React.createContext(null);

export const StoreProvider = ({
  children, store,
}) => (
  <storeContext.Provider value={store}>{children}</storeContext.Provider>
);
