const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
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
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      return { ...state, newMessageBody: action.payload };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }],
      };

    default:
      return state;
  }
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

export default dialogsReduser;
