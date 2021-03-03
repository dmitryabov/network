
import React from 'react';
import { connect } from 'react-redux';
import {sendMessageActionCreator} from '../../redux/dialogs-rediser';
import Dialogs from './Dialogs';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';



const mapStateToProps  = (state) => {
  return {
    dialogs: state.messagePage.dialogs,
    messages: state.messagePage.messages,
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    sendMessageActionCreator: (newMessageElement) => {
      dispatch(sendMessageActionCreator(newMessageElement))
    },
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
