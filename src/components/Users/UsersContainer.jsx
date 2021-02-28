import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCounPage, setToggleFetching } from '../../redux/users-rediser';
import Users from './Users';
import axios from 'axios';
import Preloader from '../common/preloader/Preloader';



class UsersApiContainer extends React.Component {

  componentDidMount() {
    this.props.setToggleFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
        this.props.setToggleFetching(false)
          this.props.setUsers(
              response.data.items
           )
           this.props.setTotalUsersCounPage(
              response.data.totalCount
           )
      })
  }


  onPageChanged = (page) => {
    this.props.setToggleFetching(true)
      this.props.setCurrentPage(page);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
      {withCredentials: true}
      ).then(response => {
        this.props.setToggleFetching(false)
          this.props.setUsers(
              response.data.items
           )
      })
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
  />
 </> 
  
}
}

const mapStateToProps  = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
}


const UsersContainer = connect(mapStateToProps, {
  follow: follow,
  unfollow: unfollow,
  setUsers: setUsers,
  setCurrentPage: setCurrentPage,
  setTotalUsersCounPage: setTotalUsersCounPage,
  setToggleFetching: setToggleFetching,
})(UsersApiContainer); 
export default UsersContainer

