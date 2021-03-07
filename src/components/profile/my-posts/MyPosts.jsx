import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { TextArea } from '../../common/preloader/formsControl/FormsConrol';
import classes from './MyPosts.module.css';
import Post from './post/Post';

const maxLengthCreator10 = maxLengthCreator(10)


const  MyPosts = ({posts, addPostActionCreator}) => {
  
  const postsElements = posts.map((elem, i) => {
    return (
      <Post message={elem.message} likesCount={elem.likesCount} key={elem.id + i}/>
    ) 
   })

   const ondNewPostAdd = (value) => {
    addPostActionCreator(value.newPostText)
   }

  return ( 
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={ondNewPostAdd} />
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  );
}


const AddNewPostForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='newPostText' component={TextArea} 
           validate={[required, maxLengthCreator10]}
        />
      </div>
      <div>
         <button>add post</button>
      </div>
     </form>
  )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default React.memo(MyPosts) ;
