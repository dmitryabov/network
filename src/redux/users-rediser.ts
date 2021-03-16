import { usersAPI } from '../api/api';
import { updateObjArray } from '../components/common/preloader/object-helpers';
import { userType } from '../types/types';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PAGE_COUNT = 'SET_TOTAL_PAGE_COUN';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

const initialState = {
  users: [] as Array<userType>,
  pageSize: 15,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingInProgress: [] as Array<number>,
};

type initialStateType = typeof initialState;

const usersReduser = (state = initialState, action: any): initialStateType => {
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

type followType = {
  type: typeof FOLLOW;
  payload: number;
};

export const follow = (userId: number): followType => {
  return {
    type: FOLLOW,
    payload: userId,
  };
};

type funfollowType = {
  type: typeof UNFOLLOW;
  payload: number;
};

export const unfollow = (userId: number): funfollowType => {
  return {
    type: UNFOLLOW,
    payload: userId,
  };
};

type setUsersType = {
  type: typeof SET_USERS;
  payload: userType;
};

export const setUsers = (users: userType): setUsersType => {
  return {
    type: SET_USERS,
    payload: users,
  };
};

type setCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  payload: number;
};

export const setCurrentPage = (currentPage: number): setCurrentPageType => {
  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage,
  };
};

type setTotalUsersCounPageType = {
  type: typeof SET_TOTAL_PAGE_COUNT;
  payload: number;
};

export const setTotalUsersCounPage = (
  totalUsersCount: number
): setTotalUsersCounPageType => {
  return {
    type: SET_TOTAL_PAGE_COUNT,
    payload: totalUsersCount,
  };
};

type setToggleFetchingType = {
  type: typeof TOGGLE_IS_FETCHING;
  payload: boolean;
};

export const setToggleFetching = (
  isFetching: boolean
): setToggleFetchingType => {
  return {
    type: TOGGLE_IS_FETCHING,
    payload: isFetching,
  };
};

type setToggleFollowingType = {
  type: typeof TOGGLE_IS_FOLLOWING;
  payload: object;
};

export const setToggleFollowing = (
  isFetching: boolean,
  userId: number
): setToggleFollowingType => {
  return {
    type: TOGGLE_IS_FOLLOWING,
    payload: {
      isFetching: isFetching,
      userId: userId,
    },
  };
};

export const getUsersThunkCreator = (
  currentPage: number,
  pageSize: number
) => async (dispatch: any) => {
  dispatch(setToggleFetching(true));
  let data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setToggleFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCounPage(data.totalCount));
};

const followUnfollowFlow = async (
  dispatch: any,
  userId: number,
  apiMethod: any,
  actionCreator: any
) => {
  dispatch(setToggleFollowing(true, userId));
  let response = await apiMethod(userId);

  if (response.data.resultCode == 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(setToggleFollowing(false, userId));
};

export const followThunkCreator = (userId: number) => async (dispatch: any) => {
  let apiMethod = usersAPI.unfollow.bind(userId);
  followUnfollowFlow(dispatch, userId, apiMethod, unfollow);
};

export const unfollowThunkCreator = (userId: number) => async (
  dispatch: any
) => {
  let apiMethod = usersAPI.follow.bind(userId);
  followUnfollowFlow(dispatch, userId, apiMethod, follow);
};

export default usersReduser;
