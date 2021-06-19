import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  count: 0,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload.counter };
    }

    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'RESET':
      return {
        ...state,
        count: initialState.count,
      };
    default:
      return state;
  }
};
export default reducers;
