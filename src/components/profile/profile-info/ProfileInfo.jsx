import React from 'react';
import classes from './ProfileInfo.module.css';
import panoramaLogo from '../../../img/panorama.jpeg'



const  ProfileInfo = () => {
  return (
      <div className={classes.profileInfo}>
        <div>
           <img className={classes.profileImg} src={panoramaLogo}></img>
        </div>
        <div className={classes.descriptionBlock}>ava</div>
      </div>
  
  );
}

export default ProfileInfo;
