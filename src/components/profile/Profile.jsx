import React from 'react';
import classes from './Profile.module.css';
import lpanoramaogo from '../../img/panorama.jpeg';
import MyPosts from './my-posts/MyPosts';



const  Profile = () => {
  return (
    <div >
        <div>
           <img src={lpanoramaogo}></img>
        </div>
        <div>ava</div>
       <MyPosts />
      </div>
  
  );
}

export default Profile;
