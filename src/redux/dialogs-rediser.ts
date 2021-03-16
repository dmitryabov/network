const SEND_MESSAGE = 'SEND_MESSAGE';

type dialogsType = {
  id: number;
  name: string;
};

type messagesType = {
  id: number;
  message: string;
};

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
  ] as Array<dialogsType>,
  messages: [
    {
      id: 1,
      message: 'how are you',
    },
    {
      id: 2,
      message: 'hoki',
    },
  ] as Array<messagesType>,
};

export type initialStateType = typeof initialState;

const dialogsReduser = (
  state = initialState,
  action: any
): initialStateType => {
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

type sendMessageActionCreatorType = {
  type: typeof SEND_MESSAGE;
  payload: string;
};

export const sendMessageActionCreator = (
  newMessageElement: string
): sendMessageActionCreatorType => {
  return {
    type: SEND_MESSAGE,
    payload: newMessageElement,
  };
};

export default dialogsReduser;
