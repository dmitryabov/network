import { setAuthThunkCreator } from './auth-rediser';

const SET_INIT = 'SET_INIT';

const initialState = {
  initialized: false,
};

const appReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_INIT:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const setInitialized = () => {
  return {
    type: SET_INIT,
  };
};

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(setAuthThunkCreator());
  Promise.all([promise]).then(() => {
    dispatch(setInitialized());
  });
};

export default appReduser;
