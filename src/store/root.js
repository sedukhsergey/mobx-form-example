import { types, applySnapshot } from 'mobx-state-tree';
import { UiStore, WishListStore, GroupStore, AuthStore, UserStore } from './models';
let storeContainer = null;
export let store = null;

try {
  storeContainer = types.model('Store', {
    userStore: types.optional(UserStore, {}),
    authStore: types.optional(AuthStore, {}),
    dashboardStore: types.optional(UiStore, {}),
    wishListStore: types.optional(WishListStore, {}),
    usersStore: types.optional(GroupStore, {}),
  });
} catch (e) {
  // eslint-disable-next-line no-console
  console.error(
    'MOBX STORE ERROR: Check mobx state tree models and make prop values and types match.',
    e,
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
