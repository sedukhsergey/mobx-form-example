import { types } from 'mobx-state-tree';
import { UiStore } from './models/UiStore/UiStore'
let storeContainer = null;
export let store = null;

try {
    storeContainer = types
        .model('Store', {
            dashboardStore: types.optional(UiStore, {})
        })
} catch (e) {
    // eslint-disable-next-line no-console
    console.error('MOBX STORE ERROR: Check mobx state tree models and make prop values and types match.', e);
}

const Store = storeContainer;


export function initStore(snapshot = null) {
    if (store === null) {
        store = Store.create();
    }
    return store;
}
