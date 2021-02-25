import React from 'react';
import classes from './Profile.module.css';
import lpanoramaogo from '../../img/panorama.jpeg';
import MyPosts from './my-posts/MyPosts';
import ProfileInfo from './profile-info/ProfileInfo';
import MyPostsContainer from './my-posts/MyPostsContainer';



const  Profile = () => {
  return (
    <div >
        <ProfileInfo/>
        <MyPostsContainer />
      </div>
  
  );
}

export default Profile;
