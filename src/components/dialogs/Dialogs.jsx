import React from 'react';
import classes from'./Dialogs.module.css';
import DialogsItem from './dialogsItem/DialogsItem';
import Message from './messages/Message';


const  Dialogs = ({state}) => {
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


  return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
           {dialogsElements}
        </div>
        <div className={classes.messages}>
           {messagesElements}
        </div>
      </div>
  
  );
}

export default Dialogs;
