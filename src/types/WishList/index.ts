export type WishListItem = {
  name: string,
  price: number,
  image: string,
  changeName: (item: string) => void,
  changePrice: (item: number) => void,
  changeImage: (item: string) => void,
  remove: () => void,
}
