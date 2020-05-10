import { types, destroy } from 'mobx-state-tree';
import { WishListItem } from "./index";


const WishList = types
  .model({
    items: types.optional(types.array(WishListItem), []),
  })
  .actions(self => ({
    add(item) {
      self.items.push(item);
    },
  }))
  .views(self => ({
    get totalPrice() {
      return self.items.reduce((acc, curr) => acc + curr.price,0)
    }
  }))


export default WishList
