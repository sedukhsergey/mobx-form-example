import {
  getSnapshot, onSnapshot, onPatch,
} from 'mobx-state-tree';
import { reaction } from 'mobx';
import WishListStore from './WishListStore';

const data = {
  name: 'Default name',
  price: 34.23,
  image: 'https://via.placeholder.com/150',
};

it('WishListStore test', () => {
  const list = WishListStore.create();
  const states = [];
  onSnapshot(list, snapshot => {
    states.push(snapshot);
  });
  list.add(data);
  expect(list.items).toHaveLength(1);
  list.items[0].changeName('Another name');
  expect(list.items[0].name).toBe('Another name');

  expect(getSnapshot(list))
    //   .toEqual({
    //   items: [
    //     {
    //       name: 'Another name',
    //       price: 34.23,
    //       image: "https://via.placeholder.com/150"
    //     }
    //   ]
    // })
    .toMatchSnapshot();
  expect(states).toMatchSnapshot();
});

it('WishListStore test - 2', () => {
  const list = WishListStore.create();
  const patches = [];
  onPatch(list, patch => {
    patches.push(patch);
  });
  list.add(data);
  expect(list.items).toHaveLength(1);
  list.items[0].changeName('Another name');
  expect(list.items[0].name).toBe('Another name');

  expect(getSnapshot(list))
    //   .toEqual({
    //   items: [
    //     {
    //       name: 'Another name',
    //       price: 34.23,
    //       image: "https://via.placeholder.com/150"
    //     }
    //   ]
    // })
    .toMatchSnapshot();
  expect(patches).toMatchSnapshot();
});

it('can calculate totalPrice', () => {
  const list = WishListStore.create();
  list.add({
    name: 'First Item',
    price: 42,
    image: 'https://via.placeholder.com/150',
  });
  list.add({
    name: 'Second Item',
    price: 52,
    image: 'https://via.placeholder.com/150',
  });
  expect(list.totalPrice).toBe(94);
  let changed = 0;
  reaction(
    () => list.totalPrice,
    () => changed++
  );
  expect(changed).toBe(0);
  list.items[0].changeName('test');
  expect(changed).toBe(0);
  list.items[0].changePrice(23);
  expect(changed).toBe(1);
});
