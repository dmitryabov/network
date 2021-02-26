const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PAGE_COUNT = 'SET_TOTAL_PAGE_COUN';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
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
        users: [...action.payload],
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case SET_TOTAL_PAGE_COUNT:
      return {
        ...state,
        totalUsersCount: action.payload,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };

    default:
      return state;
  }
};

export const follow = (userId) => {
  return {
    type: FOLLOW,
    payload: userId,
  };
};
export const unfollow = (userId) => {
  return {
    type: UNFOLLOW,
    payload: userId,
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    payload: users,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage,
  };
};

export const setTotalUsersCounPage = (totalUsersCount) => {
  return {
    type: SET_TOTAL_PAGE_COUNT,
    payload: totalUsersCount,
  };
};

export const setToggleFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    payload: isFetching,
  };
};

export default usersReduser;
