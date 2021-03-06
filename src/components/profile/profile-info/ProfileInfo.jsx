import React from 'react';
import classes from './ProfileInfo.module.css';
import panoramaLogo from '../../../img/panorama.jpeg';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatusHooks from './ProfileStatusHooks';



const  ProfileInfo = (props) => {
  if(!props.profile) {
   return  <Preloader/>
  }

  return (
      <div className={classes.profileInfo}>
        <div className={classes.descriptionBlock}>
          <img src={props.profile.photos.large} />
            <ProfileStatusHooks status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator}/>
          </div>
      </div>
  );
}

export default ProfileInfo;
