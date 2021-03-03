import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { TextArea } from '../common/preloader/formsControl/FormsConrol';
import classes from'./Dialogs.module.css';
import DialogsItem from './dialogsItem/DialogsItem';
import Message from './messages/Message';


const  Dialogs = ({dialogs, messages, sendMessageActionCreator}) => {

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

  const addNewMessagehandler = (value) => {
    sendMessageActionCreator(value.newMessageElement)
  }

  return (
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
           {dialogsElements}
        </div>
        <div className={classes.messages}>
         <div>{messagesElements}</div>  
         </div>
          <AddMessageFormRedux onSubmit={addNewMessagehandler}/>
      </div>
  
  );
}


const maxLengthCreator100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={TextArea}
          validate={[required, maxLengthCreator100]}
          name='newMessageElement' placeholder='Enter your message' />
         </div>
        <div><button>send</button></div>
    </form>
 )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;
