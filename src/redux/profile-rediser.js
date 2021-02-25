const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';

const initialState = {
  posts: [],
  newPostText: 'add text',
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

export default profileReduser;
