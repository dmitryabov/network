
import React from 'react';
import { connect } from 'react-redux';
import {sendMessageActionCreator, updateMessageActionCreator} from '../../redux/dialogs-rediser';
import Dialogs from './Dialogs';




const mapStateToProps  = (state) => {
  return {
    dialogs: state.messagePage.dialogs,
    messages: state.messagePage.messages,
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    sendMessageActionCreator: () => {
      dispatch(sendMessageActionCreator())
    },
    updateMessageActionCreator: (text) => {
      dispatch(updateMessageActionCreator(text))
    }
  }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); 
export default DialogsContainer
