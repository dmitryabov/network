import React from 'react';
import classes from './Post.module.css';
import ava from '../../../../img/ava.png';


const  Post = ({message, likesCount}) => {
  return ( 
           <div className={classes.post}>
              <img src={ava}></img>
              {message}
              <div>
              <span>like {likesCount}</span>
              </div>
            </div>
  );
}

export default Post;
