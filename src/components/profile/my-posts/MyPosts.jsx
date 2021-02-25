import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';


const  MyPosts = ({posts, newPostText,  updateNewTextActionCreator, addPostActionCreator}) => {
  
  const postsElements = posts.map((elem, i) => {
    return (
      <Post message={elem.message} likesCount={elem.likesCount} key={elem.id + i}/>
    ) 
   })

   const newPostElement = React.createRef();

   const ondNewPostAdd = () => {
    addPostActionCreator()
   }

   const onPostTextChange = () => {
    let text = newPostElement.current.value;
    updateNewTextActionCreator(text)
  }

  return ( 
        <div className={classes.postsBlock}>
          <h3>My posts</h3>
          <div>
            <div>
            <textarea onChange={onPostTextChange} ref={newPostElement} value={newPostText} />
            </div>
           <div>
           <button onClick={ondNewPostAdd}>add post</button>
           </div>
          </div>
          <div className={classes.posts}>
            {postsElements}
          </div>
        </div>
  );
}

export default MyPosts;
