import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/dialogs/DialogsContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
import ProfileContainer from './components/profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';

function App() {

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
