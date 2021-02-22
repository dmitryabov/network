import React from 'react';
import classes from './Post.module.css';
import ava from '../../../../img/ava.png';


const  Post = () => {
  return ( 
           <div className={classes.post}>
              <img src={ava}></img>
              post 1
              <div>
              <span>like</span>
              </div>
            </div>
  );
}

export default Post;
