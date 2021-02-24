import React from 'react';
import {addPostActionCreator, updateNewTextActionCreator} from '../../../redux/state';
import classes from './MyPosts.module.css';
import Post from './post/Post';


const  MyPosts = ({posts, newPostText, dispatch}) => {

  
  const postsElements = posts.map((elem, i) => {
    return (
      <Post message={elem.message} likesCount={elem.likesCount} key={elem.id + i}/>
    ) 
   })

   const newPostElement = React.createRef();
   const addNewPost = () => {
    dispatch(addPostActionCreator())
   }

   const updatePostText = () => {
    let text = newPostElement.current.value;
    dispatch(updateNewTextActionCreator(text))
  }

  return ( 
        <div className={classes.postsBlock}>
          <h3>My posts</h3>
          <div>
            <div>
            <textarea onChange={updatePostText} ref={newPostElement} value={newPostText} />
            </div>
           <div>
           <button onClick={addNewPost}>add post</button>
           </div>
          </div>
          <div className={classes.posts}>
            {postsElements}
          </div>
        </div>
  );
}

export default MyPosts;
