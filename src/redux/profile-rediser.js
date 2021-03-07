import { profileAPI, usersAPI } from '../api/api';
import { setToggleFetching } from './users-rediser';

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  posts: [{ message: 'asd', likesCount: 1 }],
  newPostText: 'add text',
  profile: null,
  status: '',
};

const profileReduser = (state = initialState, action) => {
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

export const addPostActionCreator = (newPostText) => {
  return {
    type: ADD_POST,
    payload: newPostText,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USERS_PROFILE,
    payload: profile,
  };
};

export const setUserProfileStatus = (status) => {
  return {
    type: SET_STATUS,
    payload: status,
  };
};

export const getProfileThunkCreator = (userId) => async (dispatch) => {
  dispatch(setToggleFetching(true));
  let data = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};

export const getStatusThunkCreator = (userId) => async (dispatch) => {
  dispatch(setToggleFetching(true));
  let data = await profileAPI.getStatus(userId);
  dispatch(setUserProfileStatus(data));
};

export const updateStatusThunkCreator = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setUserProfileStatus(status));
  }
};

export default profileReduser;
