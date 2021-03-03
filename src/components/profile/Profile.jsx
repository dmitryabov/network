import React from 'react';
import ProfileInfo from './profile-info/ProfileInfo';
import MyPostsContainer from './my-posts/MyPostsContainer';


const  Profile = (props) => {
  return (
    <div >
        <ProfileInfo profile={props.profile} status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator}/>
        <MyPostsContainer />
      </div>
  
  );
}

export default Profile;
