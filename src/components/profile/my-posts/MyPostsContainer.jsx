import React from 'react';
import { connect } from 'react-redux';
import {addPostActionCreator, updateNewTextActionCreator} from '../../../redux/profile-rediser';
import MyPosts from './MyPosts';



const mapStateToProps  = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPostActionCreator: () => {
      dispatch(addPostActionCreator())
    },
    updateNewTextActionCreator: text => {
      dispatch(updateNewTextActionCreator(text))
    },
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts); 
export default MyPostsContainer

