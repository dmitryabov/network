import { profileAPI, usersAPI } from '../api/api';
import { newPostType, profileType } from '../types/types';
import { setToggleFetching } from './users-rediser';

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  posts: [{ message: 'asd', likesCount: 1 }] as Array<newPostType>,
  newPostText: 'add text',
  profile: null as profileType | null,
  status: '',
};

export type initialState = typeof initialState;

const profileReduser = (state = initialState, action: any): initialState => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 4,
        message: action.payload,
        likesCount: 0,
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: '' };

    case SET_USERS_PROFILE:
      return { ...state, profile: action.payload };

    case SET_STATUS:
      return { ...state, status: action.payload };

    default:
      return state;
  }
};

type addPostActionCreatorType = {
  type: typeof ADD_POST;
  payload: string;
};

export const addPostActionCreator = (
  newPostText: string
): addPostActionCreatorType => {
  return {
    type: ADD_POST,
    payload: newPostText,
  };
};

type setUserProfileType = {
  type: typeof SET_USERS_PROFILE;
  payload: profileType;
};

export const setUserProfile = (profile: profileType): setUserProfileType => {
  return {
    type: SET_USERS_PROFILE,
    payload: profile,
  };
};

type setUserProfileStatusType = {
  type: typeof SET_STATUS;
  payload: string;
};

export const setUserProfileStatus = (
  status: string
): setUserProfileStatusType => {
  return {
    type: SET_STATUS,
    payload: status,
  };
};

export const getProfileThunkCreator = (userId: number) => async (
  dispatch: any
) => {
  dispatch(setToggleFetching(true));
  let data = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};

export const getStatusThunkCreator = (userId: number) => async (
  dispatch: any
) => {
  dispatch(setToggleFetching(true));
  let data = await profileAPI.getStatus(userId);
  dispatch(setUserProfileStatus(data));
};

export const updateStatusThunkCreator = (status: string) => async (
  dispatch: any
) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserProfileStatus(status));
  }
};

export default profileReduser;
