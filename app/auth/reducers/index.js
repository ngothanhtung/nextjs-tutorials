/* eslint-disable import/no-anonymous-default-export */
import * as ActionTypes from '../actions/types';
import { HYDRATE } from 'next-redux-wrapper';

const defaultState = {
  loading: false,
  error: null,
  loggedInUser: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.auth };
    }

    case ActionTypes.AUTH_LOGIN: {
      return {
        ...state,
        loading: true,
        loggedInUser: null,
        error: null,
      };
    }
    case ActionTypes.AUTH_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        loggedInUser: action.loggedInUser,
        error: null,
      };
    }

    case ActionTypes.AUTH_LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        loggedInUser: null,
        error: action.error,
      };
    }

    case ActionTypes.AUTH_LOGIN_INVALID: {
      return {
        ...state,
        loading: false,
        loggedInUser: null,
        error: null,
      };
    }

    case ActionTypes.AUTH_SET_LOGGED_IN_USER: {
      return {
        ...state,
        loading: false,
        loggedInUser: action.user,
        error: null,
      };
    }

    case ActionTypes.AUTH_LOG_OUT_SUCCESS: {
      return {
        ...state,
        loading: false,
        loggedInUser: null,
        error: null,
      };
    }

    default:
      return state;
  }
};
