import { setAuthThunkCreator } from './auth-rediser';

const SET_INIT = 'SET_INIT';

export type InitialStateType = {
  initialized: boolean;
};

const initialState: InitialStateType = {
  initialized: false,
};

const appReduser = (
  state: InitialStateType = initialState,
  action: InitializedSuccessActionType
): InitialStateType => {
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

type InitializedSuccessActionType = {
  type: typeof SET_INIT;
};

export const setInitialized = (): InitializedSuccessActionType => {
  return {
    type: SET_INIT,
  };
};

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(setAuthThunkCreator());
  Promise.all([promise]).then(() => {
    dispatch(setInitialized());
  });
};

export default appReduser;
