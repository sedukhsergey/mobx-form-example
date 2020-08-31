import {
  types, applySnapshot,
} from 'mobx-state-tree';
import {
  GroupStore,
  AuthStore,
  AccountStore,
} from './models';
let storeContainer = null;
export let store = null;

try {
  storeContainer = types.model('Store', {
    authStore: types.optional(AuthStore, {}),
    accountStore: types.optional(AccountStore, {}),
    usersStore: types.optional(GroupStore, {}),
    i18nLanguage: types.optional(types.string, 'us'),
  })
    .views(self => ({
      get country() {
        return self.i18nLanguage;
      },
    }))
    .actions(self => ({
      updateLanguage(lng) {
        console.log('updateLanguage', lng);
        self.i18nLanguage = lng;
      },
    }));
} catch (e) {
  // eslint-disable-next-line
  console.error('MOBX STORE ERROR: Check mobx state tree models and make prop values and types match.',
    e
  );
}

const Store = storeContainer;

export function initStore(snapshot = null) {
  if (store === null) {
    store = Store.create();
  }
  if (snapshot) {
    applySnapshot(store, snapshot);
  }
  return store;
}
