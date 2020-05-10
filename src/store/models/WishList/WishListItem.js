import {types} from "mobx-state-tree";

const WishListItem = types
  .model({
  name: types.string,
  price: types.number,
  image: types.optional(types.string, ''),
})
  .actions(self => ({
    changeName(newName) {
      self.name = newName;
    },
    changePrice(newPrice) {
      self.price = newPrice;
    },
    changeImage(newImage) {
      self.image = newImage;
    }
  }))

export default WishListItem;
