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
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.payload;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageActionCreator = (newMessageElement) => {
  return {
    type: SEND_MESSAGE,
    payload: newMessageElement,
  };
};

export default dialogsReduser;
