const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';
const SEND_MESSAGE = 'SEND_MESSAGE';

const store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: 'good',
          likesCount: 12,
        },
        {
          id: 2,
          message: 'yup',
          likesCount: 11,
        },
      ],
      newPostText: 'add text',
    },
    messagePage: {
      dialogs: [
        {
          id: 1,
          name: 'Dima',
        },
        {
          id: 2,
          name: 'Anton',
        },
      ],
      messages: [
        {
          id: 1,
          message: 'how are you',
        },
        {
          id: 2,
          message: 'hoki',
        },
      ],
      newMessageBody: '',
    },
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_TEXT) {
      this._state.profilePage.newPostText = action.payload;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      const newMessage = {
        id: 6,
        message: this._state.messagePage.newMessageBody,
      };
      this._state.messagePage.messages.push(newMessage);
      this._state.messagePage.newMessageBody = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.messagePage.newMessageBody = action.payload;
      this._callSubscriber(this._state);
    }
  },
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

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updateMessageActionCreator = (message) => {
  return {
    type: UPDATE_NEW_MESSAGE,
    payload: message,
  };
};

export default store;
