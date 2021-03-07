
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/preloader/Preloader';
import HeaderContainer from './components/header/HeaderContainer';
import withSuspense from './components/hoc/withSuspense';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import { initializeApp } from './redux/app-rediser';

const DialogsContainer = React.lazy(() => import('./components/dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/profile/ProfileContainer'));



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
          <Route path='/profile/:userId?' 
                  render={ withSuspense(ProfileContainer)}/>
          <Route path='/dialogs' 
                 render={ withSuspense(DialogsContainer)}/>
                     
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

