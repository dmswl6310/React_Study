export const user = {
  SET_USER: "user/SET_USER",
};

export const userActions = {
  setUser: (data: string) => ({ type: user.SET_USER, payload: data }),
};
