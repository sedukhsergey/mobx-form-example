

export type AuthStore = {
  isAuthorized: boolean,
  setAuthorizedStatus: (status: boolean) => void,
  logIn: (email: string) => void,
  logOut: () => void,
};

