import { WishListStore } from '../WishListStore';

export type GroupUserA = {
  id: number,
  name: string,
  gender: string,
  wishList: WishListStore,
  get: (id: any) => void,
  set: () => void,
}

export type GroupUser = {
  id: number,
  name: string,
  gender: string,
  wishList: WishListStore,
  get: (id: number) => GroupUserA,
  set: () => void,
  map: () => void,
}

export type GroupStore = {
  users: GroupUser,
  createItems: (item: GroupUser) => void,
  fetchUsers: () => void,
};
