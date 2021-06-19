import * as ActionTypes from './types';

export const login = (username, password) => {
  return {
    type: ActionTypes.AUTH_LOGIN,
    username,
    password,
  };
};

export const setLoggedInUser = (user) => {
  return {
    type: ActionTypes.AUTH_SET_LOGGED_IN_USER,
    user,
  };
};

export const logout = () => {
  return {
    type: ActionTypes.AUTH_LOG_OUT,
  };
};
