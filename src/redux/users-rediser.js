import { usersAPI } from '../api/api';
import { updateObjArray } from '../components/common/preloader/object-helpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PAGE_COUNT = 'SET_TOTAL_PAGE_COUN';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

const initialState = {
  users: [],
  pageSize: 15,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingInProgress: [],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjArray(state.users, action.payload, 'id', {
          followed: true,
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjArray(state.users, action.payload, 'id', {
          followed: false,
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
    case TOGGLE_IS_FOLLOWING:
      return {
        ...state,
        isFollowingInProgress: action.payload.isFetching
          ? [...state.isFollowingInProgress, action.payload.userId]
          : state.isFollowingInProgress.filter(
              (id) => id != action.payload.userId
            ),
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

export const setToggleFollowing = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING,
    payload: {
      isFetching: isFetching,
      userId: userId,
    },
  };
};

export const getUsersThunkCreator = (currentPage, pageSize) => async (
  dispatch
) => {
  dispatch(setToggleFetching(true));
  let data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setToggleFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCounPage(data.totalCount));
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(setToggleFollowing(true, userId));
  let response = await apiMethod(userId);

  if (response.data.resultCode == 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(setToggleFollowing(false, userId));
};

export const followThunkCreator = (userId) => async (dispatch) => {
  let apiMethod = usersAPI.unfollow.bind(userId);
  followUnfollowFlow(dispatch, userId, apiMethod, unfollow);
};

export const unfollowThunkCreator = (userId) => async (dispatch) => {
  let apiMethod = usersAPI.follow.bind(userId);
  followUnfollowFlow(dispatch, userId, apiMethod, follow);
};

export default usersReduser;
