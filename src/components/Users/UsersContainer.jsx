import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, setToggleFollowing, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from '../../redux/users-rediser';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { usersAPI } from '../../api/api';
import { getPageSize, getUsers,  getTotalUsersCount, getiisFollowingInProgres, getiIsFetching, getCurrentPage } from '../../redux/users-selectors';


class UsersApiContainer extends React.Component {

  componentDidMount() {
    const {getUsersThunkCreator, currentPage, pageSize} = this.props
    getUsersThunkCreator(currentPage, pageSize)
  }


  onPageChanged = (page) => {
      this.props.setCurrentPage(page);
      this.props.getUsersThunkCreator(page, this.props.pageSize)
  }
 

render () {
 return <>
 {this.props.isFetching ? 
 <Preloader/> : null}
    <Users totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      unfollow={this.props.unfollow}
      follow={this.props.follow}
      setToggleFollowing={this.props.setToggleFollowing}
      isFollowingInProgress={this.props.isFollowingInProgress}
      followThunkCreator={this.props.followThunkCreator}
      unfollowThunkCreator={this.props.unfollowThunkCreator}
  />
 </> 
  
}
}


const mapStateToProps  = (state) => {
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

