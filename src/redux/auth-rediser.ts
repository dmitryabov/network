import { stopSubmit } from 'redux-form';
import { authAPI } from '../api/api';

const SET_USER_DATA = 'auth/SET_USER_DATA';

export type initialStateType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

const initialState: initialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReduser = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export type SetAuthUserPayloadType = {
  id: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
};

export type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetAuthUserPayloadType;
};

export const setAuthUserData = (
  id: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetAuthUserDataActionType => {
  return {
    type: SET_USER_DATA,
    payload: { id, email, login, isAuth },
  };
};

export const setAuthThunkCreator = () => async (dispatch: any) => {
  let data = await authAPI.me();

  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const loginThunkCreator = (
  email: string,
  password: string,
  rememberMe: boolean
) => async (dispatch: any) => {
  let data = await authAPI.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(setAuthThunkCreator);
  } else {
    let errorMessage = data.messages.length > 0 ? data.messages[0] : 'Error';
    dispatch(stopSubmit('login', { _error: errorMessage }));
  }
};

export const logoutThunkCreator = () => async (dispatch: any) => {
  let data = await authAPI.logout();
  //@ts-ignore
  if (data.resultCode === 0) {
    dispatch(setAuthThunkCreator);
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReduser;
