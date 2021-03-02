
import React from 'react';
import { connect } from 'react-redux';
import {sendMessageActionCreator, updateMessageActionCreator} from '../../redux/dialogs-rediser';
import Dialogs from './Dialogs';
import { Redirect } from 'react-router-dom';
import withAuthRedirect from '../hoc/withAuthRedirect';



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


let AuthRedirectComponent = withAuthRedirect(Dialogs)

const mapStateToPropsForRedirect  = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}


AuthRedirectComponent= connect(mapStateToPropsForRedirect)(AuthRedirectComponent)


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent); 
export default DialogsContainer
