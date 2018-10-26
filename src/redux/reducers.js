import { combineReducers } from 'redux';

const INITIAL_STATE = {
  list: null
};

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'List/Success':
      return {
        list: payload.list,
      };

    default:
      return state;
  }
};

export default combineReducers({ reducer });
