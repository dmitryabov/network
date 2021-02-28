import React from 'react';
import classes from './ProfileInfo.module.css';
import panoramaLogo from '../../../img/panorama.jpeg';
import Preloader from '../../common/preloader/Preloader';



const  ProfileInfo = (props) => {
  if(!props.profile) {
   return  <Preloader/>
  }

  return (
      <div className={classes.profileInfo}>
        <div>
           <img className={classes.profileImg} src={panoramaLogo}></img>
        </div>
        <div className={classes.descriptionBlock}>
          <img src={props.profile.photos.large} />
          ava
          </div>
      </div>
  );
}

export default ProfileInfo;
