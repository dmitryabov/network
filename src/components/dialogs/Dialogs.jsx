import React from 'react';
import {sendMessageActionCreator, updateMessageActionCreator} from '../../redux/state';
import classes from'./Dialogs.module.css';
import DialogsItem from './dialogsItem/DialogsItem';
import Message from './messages/Message';


const  Dialogs = ({state, dispatch}) => {
  const {dialogs, messages} = state

  const dialogsElements = dialogs.map((elem, i) => {
   return (
      <DialogsItem id={elem.id} name={elem.name} key={elem.id + i}/>
   ) 
  })


  const messagesElements = messages.map((elem, i) => {
    return (
      <Message message={elem.message} key={elem.id + i}/>
    ) 
   })

   const newMessageElement = React.createRef();
   const addNewMessage = () => {
    dispatch(sendMessageActionCreator())
   }

   const updatePostText = () => {
    let text = newMessageElement.current.value;
    dispatch(updateMessageActionCreator(text))
  }


  return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
           {dialogsElements}
        </div>
        <div className={classes.messages}>
         <div>{messagesElements}</div>  
         <div>
           <div><textarea placeholder="Enter your message" ref={newMessageElement} onChange={updatePostText}></textarea></div>
           <div><button onClick={addNewMessage}>send</button></div>
         </div>
        </div>
      </div>
  
  );
}

export default Dialogs;
