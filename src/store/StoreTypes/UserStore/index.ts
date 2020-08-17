export type UserData = {
  email: string | null,
  setEmail: (email: string) => void,
}

export type UserLoginData = {
  email: string,
  password: string,
}

export type UserStore = {
  userData: UserData,
  createUser: (item: UserLoginData) => void,
  updateUserEmail: (email: string) => void,
}
