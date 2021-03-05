
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/preloader/Preloader';
import DialogsContainer from './components/dialogs/DialogsContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import ProfileContainer from './components/profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './redux/app-rediser';
import { setAuthThunkCreator } from './redux/auth-rediser';

class  App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
}

  render(){
    if(!this.props.initialized) {
      
     return <Preloader/>
    }

    return (
    
      <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={() =>  <ProfileContainer />} />
          <Route path='/dialogs' render={() =>  <DialogsContainer />} />
          <Route path='/users' render={() =>  <UsersContainer/>} />
          <Route path='/login' render={() =>  <Login/>} />
        </div>
      </div>
     
    );
}
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}


export default  compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App)

