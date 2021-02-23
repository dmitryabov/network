import React from 'react';
import classes from './Profile.module.css';
import lpanoramaogo from '../../img/panorama.jpeg';
import MyPosts from './my-posts/MyPosts';
import ProfileInfo from './profile-info/ProfileInfo';



const  Profile = ({state, addPost}) => {
  return (
    <div >
        <ProfileInfo/>
        <MyPosts posts={state.posts} addPost={addPost}/>
      </div>
  
  );
}

export default Profile;
