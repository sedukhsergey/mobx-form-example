
export type User = {
  name: string,
  isActive: boolean,
  id: number,
  setName: (name: string) => void,
  toggleActiveStatus: () => void,
  delete: () => void,
}

export type UiStore = {
  users: User[],
  addUser: (name: string) => void,
  reset: () => void,
  deleteUser: (user: User) => void,
}

