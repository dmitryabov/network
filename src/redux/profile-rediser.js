import { usersAPI } from '../api/api';
import { setToggleFetching } from './users-rediser';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

const initialState = {
  posts: [],
  newPostText: 'add text',
  profile: null,
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0,
      };

      return { ...state, posts: [...state.posts, newPost], newPostText: '' };

    case UPDATE_NEW_TEXT:
      return { ...state, newPostText: action.payload };

    case SET_USERS_PROFILE:
      return { ...state, profile: action.payload };

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_TEXT,
    payload: text,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USERS_PROFILE,
    payload: profile,
  };
};

export const getProfileThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(setToggleFetching(true));
    usersAPI.getProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};

export default profileReduser;
