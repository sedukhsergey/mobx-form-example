import WishListItem from "./WishListItem";

const data = {
  "name": "Default name",
  "price": 34.23,
  "image": "https://via.placeholder.com/150"
}

it('create instance of model', () => {
  const item = WishListItem.create(data);
  expect(item.price).toBe(34.23);
  expect(item.name).toBe('Default name');
  item.changeName('Superhero');
  expect(item.name).toBe('Superhero');
});
