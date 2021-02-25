const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [
    {
      id: 1,
      userAva: '',
      followed: false,
      fullName: 'Dima',
      status: 'Good',
      location: { city: 'Minsk', country: 'Belarus' },
    },
    {
      id: 2,
      userAva: '',
      followed: true,
      fullName: 'Masha',
      status: 'Good',
      location: { city: 'Minsk', country: 'Belarus' },
    },
  ],
  newPostText: 'add text',
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };

    default:
      return state;
  }
};

export const followActionCreator = (userId) => {
  return {
    type: FOLLOW,
    payload: userId,
  };
};
export const unfollowActionCreator = (userId) => {
  return {
    type: UNFOLLOW,
    payload: userId,
  };
};

export const setUsersActionCreator = (users) => {
  return {
    type: SET_USERS,
    payload: users,
  };
};

export default usersReduser;
