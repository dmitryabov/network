import React from 'react';
import classes from './MyPosts.module.css';
import ava from '../../../img/ava.png';
import Post from './post/Post';


const  MyPosts = () => {
  return ( 
        <div>
          My posts
          <div>
            <textarea></textarea>
            <button>add post</button>
          </div>
          <div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
          </div>
        </div>
  );
}

export default MyPosts;
