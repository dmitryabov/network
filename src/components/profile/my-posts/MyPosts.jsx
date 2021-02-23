import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';


const  MyPosts = ({posts, addPost}) => {
  
  const postsElements = posts.map((elem, i) => {
    return (
      <Post message={elem.message} likesCount={elem.likesCount} key={elem.id + i}/>
    ) 
   })

   const newPostElement = React.createRef();
   const addNewPost = () => {
     let text = newPostElement.current.value;
     addPost(text)
   }


  return ( 
        <div className={classes.postsBlock}>
          <h3>My posts</h3>
          <div>
            <div>
            <textarea></textarea>
            </div>
           <div>
           <button ref={newPostElement} onClick={addNewPost}>add post</button>
           </div>
          </div>
          <div className={classes.posts}>
            {postsElements}
          </div>
        </div>
  );
}

export default MyPosts;
