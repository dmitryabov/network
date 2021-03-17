import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, setToggleFollowing, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from '../../redux/users-rediser';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { getPageSize, getUsers, getTotalUsersCount, getiisFollowingInProgres, getiIsFetching, getCurrentPage } from '../../redux/users-selectors';
import { userType } from '../../types/types';
import { AppStateType } from '../../redux/redux-store';



type MapStatePropsType = {
  currentPage: number
  pageSize: number
  isFetching: boolean
  totalUsersCount: number
  users: Array<userType>
  isFollowingInProgress: Array<number>
}

type MapDispatchPropsType = {
  getUsersThunkCreator: (page: number, pageSize: number) => void
  unfollow: (id: number) => void
  follow: (id: number) => void
  unfollowThunkCreator: (id: number) => void
  followThunkCreator: (id: number) => void
  setCurrentPage: (page: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType


class UsersApiContainer extends React.Component<PropsType> {

  componentDidMount() {
    const { getUsersThunkCreator, currentPage, pageSize } = this.props
    getUsersThunkCreator(currentPage, pageSize)
  }


  onPageChanged = (page: number) => {
    this.props.setCurrentPage(page);
    this.props.getUsersThunkCreator(page, this.props.pageSize)
  }


  render() {
    return <>
      {this.props.isFetching ?
        <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        unfollowThunkCreator={this.props.unfollowThunkCreator}
        followThunkCreator={this.props.followThunkCreator}
        isFollowingInProgress={this.props.isFollowingInProgress}
      />
    </>

  }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getiIsFetching(state),
    isFollowingInProgress: getiisFollowingInProgres(state)
  }
}


const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  setToggleFollowing,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator
})(UsersApiContainer);
export default UsersContainer

