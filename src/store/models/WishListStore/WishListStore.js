import {
  types, destroy
} from 'mobx-state-tree';
import WishListItem from './WishListItem';

const initialState = [
  {
    name: 'Item 1',
    price: 22.4,
    image: 'https://picsum.photos/id/238/200/300',
  },
  {
    name: 'Item 2',
    price: 33.6,
    image: 'https://picsum.photos/id/237/200/300',
  },
];

const WishListStore = types
  .model({
    items: types.optional(types.array(WishListItem), []),
  })
  .actions(self => ({
    add(item) {
      self.items.push(item);
    },
    createItems(items) {
      self.items = items;
    },
    async fetchItems() {
      try {
        setTimeout(() => {
          this.createItems(initialState);
        }, 100);
      } catch (e) {
        console.error('fetch items error', e);
      }
    },
    remove(item) {
      destroy(item);
    },
  }))
  .views(self => ({
    get totalPrice() {
      return self.items.reduce((acc, curr) => acc + curr.price, 0);
    },
  }));

export default WishListStore;
