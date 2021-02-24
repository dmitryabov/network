import React from 'react';
import classes from './Profile.module.css';
import lpanoramaogo from '../../img/panorama.jpeg';
import MyPosts from './my-posts/MyPosts';
import ProfileInfo from './profile-info/ProfileInfo';



const  Profile = ({state,dispatch}) => {
  return (
    <div >
        <ProfileInfo/>
        <MyPosts posts={state.posts}  newPostText={state.newPostText} dispatch={dispatch}/>
      </div>
  
  );
}

export default Profile;
